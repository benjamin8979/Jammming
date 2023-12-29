import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Searchresults from '../Searchresults/Searchresult';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Searchbar/>
      <div className={styles.main}>
        <Searchresults/>
        <Playlist/>
      </div>
    </div>
  );
}

export default App;
