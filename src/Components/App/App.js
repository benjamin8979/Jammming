import { useState } from 'react';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Searchresults from '../Searchresults/Searchresult';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';
import { getAccessToken, searchRequest, saveToSpotify } from '../../Utilities/Spotify';


// App component
// Root component containing all stateful information to be passed
// Down to presentational components
function App() {

  // Retrieve user's Spotify access token as soon as app is started
  getAccessToken();

  // Search input state passed to Searchbar component
  const [searchInput, setSearchInput] = useState("");

  // Track list state passed to Searchresults component
  const [tracks, setTracks] = useState([]);

  // Playlist state passed to Playlist component
  const [playList, setPlayList] = useState([]);

  // Playlist name state passed to Playlist component
  const [playListName, setPlayListName] = useState("");

  // URIs used to inform Spotify which tracks to add to playlist
  const[URIs, setURIs] = useState([]);

  // Allows user to enter text in the search bar
  // Passed to Searchbar component
  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  // Creates a search request to Spotify when the search button is clicked
  // Passed to Searchbar component
  async function handleSearchClick(param) {
    if (param) {
      let tracksList = await searchRequest(param);
      setTracks(tracksList);
    }
  }

  // Allows a user to add a track from the search results to their playlist
  // Passed to Searchresults component
  function addTrack(newTrackID) {
    for (let track of tracks) {
      if (track.id === newTrackID) {
        if(!playList||(playList.filter((p) => {return p.id === track.id})).length === 0) {
          setPlayList((prevTracks) => prevTracks?[...prevTracks, track]:[track]);
          setURIs((prevURIs) => prevURIs?[...prevURIs, track.uri]:[track.uri]);
        }
        return;
      }
    }
  }

  // Allows a user to clear the search results
  // Passed to Searchresults component
  function clearTracks() {
    setTracks([]);
  }

  // Allows a user to change the name of their playlist
  // Passed to Playlist component
  function handleNameChange(e) {
    setPlayListName(e.target.value);
  }

  // Allows a user to remove a track from their playlist
  // Passed to Playlist component
  function removeTrack(trackID) {
    setPlayList((prevTracks) => playList.filter((p) => {return p.id !== trackID}));
  }

  // Saves a user's playlist to Spotify when the save button is clicked
  // Passed to Playlist component
  function savePlaylist() {
    if (playList.length > 0 && playListName) {
      saveToSpotify(playListName, URIs);
      setPlayList([]);
      setPlayListName("");
      setURIs([]);
    }
  }

  return (
    <div className={styles.App}>
      <Header/>
      <Searchbar searchInput={searchInput} onChange={handleSearchChange} onSearch={handleSearchClick}/>
      <div className={styles.main}>
        <Searchresults tracks={tracks} addTrack={addTrack} clearTracks={clearTracks}/>
        <Playlist playList={playList} playListName={playListName} 
        onChange={handleNameChange} removeTrack={removeTrack} savePlaylist={savePlaylist}/>
      </div>
    </div>
  );
}

export default App;
