import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist() {
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
        <div className={styles.playlist}>
            <input className={styles.input}/>
            <Tracklist buttonType="-" tracks={tracksList}/>
        </div>

    );
}

export default Playlist;