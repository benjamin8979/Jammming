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
  
  const playsList = [];
  for (let i = 11; i <= 15; i++) {
    let track = {};
    track.name = "name" + i;
    track.artist = "artist" + i;
    track.album = "album" + i;
    track.playlist = "playlist" + i;
    playsList.push(track)
}

  const [tracks, setTracks] = useState(tracksList);

  const [playList, setPlayList] = useState(playsList);

  const [playListName, setPlayListName] = useState("");

  function handleSearchClick() {
    setTracks(tracksList);
  }

  function handlePlayListChange() {
    setPlayList(playList);
  }

  function handleNameChange(e) {
    setPlayListName(e.target.value)
  }

  return (
    <div className={styles.App}>
      <Header/>
      <Searchbar onClick={handleSearchClick}/>
      <div className={styles.main}>
        <Searchresults tracks={tracks}/>
        <Playlist playList={playList} playListName={playListName} onChange={handleNameChange}/>
      </div>
    </div>
  );
}

export default App;
