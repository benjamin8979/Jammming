import { useState } from 'react';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Searchresults from '../Searchresults/Searchresult';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';
import { generateId } from '../../Utilities/Utilities';
import { searchRequest } from '../../Utilities/Spotify';

function App() {


  const tracksList = [];
  for (let i = 1; i <= 10; i++) {
      let track = {};
      track.name = "name" + i;
      track.artist = "artist" + i;
      track.album = "album" + i;
      track.playlist = "playlist" + i;
      track.id = generateId();
      track.uri = generateId();
      tracksList.push(track)
  }
  
  const [searchInput, setSearchInput] = useState("");

  const [tracks, setTracks] = useState(tracksList);

  const [playList, setPlayList] = useState([]);

  const [playListName, setPlayListName] = useState("");

  const[URIs, setURIs] = useState([]);

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSearchClick(param) {
    setTracks(tracksList);
    if (param) {
      searchRequest(param);
    }
  }

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

  function removeTrack(trackID) {
    setPlayList((prevTracks) => playList.filter((p) => {return p.id !== trackID}));
  }

  function handleNameChange(e) {
    setPlayListName(e.target.value);
  }

  function savePlaylist() {
    if (playList.length > 0 && playListName) {
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
        <Searchresults tracks={tracks} addTrack={addTrack}/>
        <Playlist playList={playList} playListName={playListName} 
        onChange={handleNameChange} removeTrack={removeTrack} savePlaylist={savePlaylist}/>
      </div>
    </div>
  );
}

export default App;
