import {generateString} from './Utilities';

const clientID = '';
const redirectURI = 'http://localhost:3000';

let accessToken;

export function getAccessToken(){
    if (accessToken) {
        return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken= "", expiresIn * 1000);
        window.history.pushState('Access Token', null, '/'); 
        return accessToken;
    }
    else {
        const stateKey = 'spotify_auth_state';
        const state = generateString(16);
        localStorage.setItem(stateKey, state);
        const scope = 'playlist-modify-public';
        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(clientID);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirectURI);
        url += '&state=' + encodeURIComponent(state);
        window.location = url;
    } 
}

export async function searchRequest(searchInput) {
    accessToken = getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, {
        "method": "get",
        "headers": {
            "Authorization": "Bearer " + accessToken 
        }
    });
    const data = await response.json();
    let tracks = [];
    tracks = data.tracks.items.map((track) => {
        return {
            id: track.id,
            name: track.name,
            artist: track.artists.map(artist => {
               return artist.name
            }),
            album: track.album.name,
            uri: track.uri
        }
    });
    return tracks;
}

export async function saveToSpotify(playlistName, tracksToAdd) {
    accessToken = getAccessToken();
    const response = await fetch("https://api.spotify.com/v1/me", {
        "method": "get",
        "headers": {
            "Authorization": "Bearer " + accessToken
        }
    });
    const data = await response.json();
    const playlistData = {
        name: playlistName,
        description: `New playlist -- ${playlistName} -- created from Jammming app!`
    }
    const createPlaylist = await fetch(`https://api.spotify.com/v1/users/${data.id}/playlists`, {
        "method": "post",
        "headers": {
            "Authorization": "Bearer " + accessToken,
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(playlistData)
    });
    const playlistResponseData = await createPlaylist.json();
    const trackURIs = {"uris": tracksToAdd};
    const addToPlaylist = await fetch(`https://api.spotify.com/v1/playlists/${playlistResponseData.id}/tracks`, {
        "method": "post",
        "headers": {
            "Authorization": "Bearer " + accessToken,
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(trackURIs)
    });
    console.log(addToPlaylist);
}