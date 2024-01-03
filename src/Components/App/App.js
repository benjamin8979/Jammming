import { useState } from 'react';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Searchresults from '../Searchresults/Searchresult';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';
import { getAccessToken, searchRequest } from '../../Utilities/Spotify';

function App() {

  getAccessToken();

  const [searchInput, setSearchInput] = useState("");

  const [tracks, setTracks] = useState([]);

  const [playList, setPlayList] = useState([]);

  const [playListName, setPlayListName] = useState("");

  const[URIs, setURIs] = useState([]);

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }

  async function handleSearchClick(param) {
    if (param) {
      let tracksList = await searchRequest(param);
      console.log(tracksList);
      setTracks(tracksList);
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
