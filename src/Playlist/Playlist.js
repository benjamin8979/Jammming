import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist(props) {
    

    return (
        <div className={styles.playlist}>
            <input className={styles.input} placeholder='Playlist Name'/>
            <Tracklist buttonType="-" tracks={props.playList}/>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Save to Spotify</button>
            </div>
           
        </div>

    );
}

export default Playlist;