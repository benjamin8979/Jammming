import Tracklist from '../Tracklist/Tracklist';
import styles from './Searchresults.module.css';

function Searchresults() {
    const tracksList = [];
    for (let i = 1; i <= 10; i++) {
        let track = {};
        track.name = "name" + i;
        track.artist = "artist" + i;
        track.album = "album" + i;
        track.playlist = "playlist" + i;
        tracksList.push(track)
    }
    return (
        <div className={styles.search}>
            <div className={styles.align}>
                <h2 className={styles.results}>Results</h2>
                <div></div>
            </div>
            <Tracklist tracks={tracksList} buttonType="+"/>
        </div>
    );
}

export default Searchresults;