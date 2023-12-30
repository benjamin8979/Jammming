import { useState } from 'react';
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Searchresults from '../Searchresults/Searchresult';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';

function App() {

  const tracksList = [];
    for (let i = 1; i <= 10; i++) {
        let track = {};
        track.name = "name" + i;
        track.artist = "artist" + i;
        track.album = "album" + i;
        track.playlist = "playlist" + i;
        tracksList.push(track)
    }

  const [tracks, setTracks] = useState(tracksList);

  function handleClick() {
    setTracks(tracksList);
  }

  return (
    <div className={styles.App}>
      <Header/>
      <Searchbar onClick={handleClick}/>
      <div className={styles.main}>
        <Searchresults tracks={tracks}/>
        <Playlist/>
      </div>
    </div>
  );
}

export default App;
