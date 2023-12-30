import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist(props) {
    return (
        
        <div>
            {props.tracks?.map((track, index) => {
                return(
                <div key={track.name+index}>
                <div className={styles.track}>
                    <Track name={track.name} artist={track.artist} album={track.album} playlist={track.playlist} />
                    <button className={styles.button}>{props.buttonType}</button>
                </div>
                <hr className={styles.line}></hr>
                </div>);
            })}
        </div>
    );
}

export default Tracklist;