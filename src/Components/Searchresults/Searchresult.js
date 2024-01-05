import Tracklist from '../Tracklist/Tracklist';
import styles from './Searchresults.module.css';

// Searchresults component
// Container to display the tracklist returned from Spotify search request
function Searchresults(props) {
    return (
        <div className={styles.search}>
            <div className={styles.align}>
                <h2 className={styles.results}>Results</h2>
                <button className={styles.button} onClick={props.clearTracks}>Clear</button>
            </div>
            <Tracklist tracks={props.tracks} addTrack={props.addTrack} buttonType="+"/>
        </div>
    );
}

export default Searchresults;