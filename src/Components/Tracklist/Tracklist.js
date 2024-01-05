import Track from '../Track/Track';
import styles from './Tracklist.module.css';

// Tracklist component
// Organized container for tracks
// Displayed in search results and playlist
function Tracklist(props) {
    return (
        <div className={styles.track}>
            {props.tracks?.map((track) => {
                return(
                <Track track={track} name={track.name} artist={track.artist} 
                album={track.album} playlist={track.playlist} key={track.id} 
                buttonType={props.buttonType} addTrack={props.addTrack} removeTrack={props.removeTrack}/>
                );
            })}
        </div>
    );
}

export default Tracklist;