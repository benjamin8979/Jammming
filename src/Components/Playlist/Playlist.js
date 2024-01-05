import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

// Playlist component
// Displays tracks added to a users playlist
// Allows user to name a playlist and save it to Spotify
function Playlist(props) {
    return (
        <div className={styles.playlist}>
            <input className={styles.input} placeholder='Playlist Name' value={props.playListName} onChange={props.onChange}/>
            <Tracklist buttonType="-" tracks={props.playList} removeTrack={props.removeTrack}/>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={props.savePlaylist}>Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist;