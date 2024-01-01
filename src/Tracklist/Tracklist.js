import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist(props) {

    return (
        
        <div className={styles.track}>
            {props.tracks?.map((track, index) => {
                return(
                <Track track={track} name={track.name} artist={track.artist} 
                album={track.album} playlist={track.playlist} key={track.id} 
                buttonType={props.buttonType} addTrack={props.addTrack}/>
                );
            })}
        </div>
    );
}

export default Tracklist;