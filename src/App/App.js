import { useState } from 'react';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Searchresults from '../Searchresults/Searchresult';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';
import { generateId } from '../Utilities/Utilities';

function App() {

  const tracksList = [];
  for (let i = 1; i <= 10; i++) {
      let track = {};
      track.name = "name" + i;
      track.artist = "artist" + i;
      track.album = "album" + i;
      track.playlist = "playlist" + i;
      track.id = generateId();
      tracksList.push(track)
  }
  

  const [tracks, setTracks] = useState(tracksList);

  const [playList, setPlayList] = useState(null);

  const [playListName, setPlayListName] = useState([]);

  function handleSearchClick() {
    setTracks(tracksList);
  }

  function addTrack(newTrackID) {
    for (let track of tracks) {
      if (track.id === newTrackID) {
        if(!playList||(playList.filter((p) => {return p.id === track.id})).length === 0) {
          setPlayList((prevTracks) => prevTracks?[...prevTracks, track]:[track]);
        }
        return;
      }
    }
  }

  function removeTrack(trackID) {
    setPlayList((prevTracks) => playList.filter((p) => {return p.id !== trackID}));
  }

  function handleNameChange(e) {
    setPlayListName(e.target.value)
  }

 

  return (
    <div className={styles.App}>
      <Header/>
      <Searchbar onClick={handleSearchClick}/>
      <div className={styles.main}>
        <Searchresults tracks={tracks} addTrack={addTrack}/>
        <Playlist playList={playList} playListName={playListName} 
        onChange={handleNameChange} removeTrack={removeTrack}/>
      </div>
    </div>
  );
}

export default App;
