import styles from './Track.module.css';

// Track component
// Track includes a song's name, artist, and album
// As well as a button to add to or remove from playlist
function Track(props) {

    // Add track to the playlist if button is "+"
    // Remove track from the playlist if button is "-"
    function handleClick() {
        if (props.buttonType === "+") {
            props.addTrack(props.track.id);
        }
        else if (props.buttonType === "-") {
            props.removeTrack(props.track.id);
        }
    }

    let artists = "";
    props.artist.forEach((artist) => artists += artist + " ");

    return(
        <div>
            <div className={styles.trackRow}>
                <div className={styles.Track}>
                    <h5 className={styles.firstrow}>{props.name}</h5>
                    <h6 className={styles.secondrow}>{artists}| {props.album}</h6>
                    <h6 className={styles.thirdrow}>{props.playlist}</h6>
                </div>
                <button className={styles.button} onClick={handleClick}>{props.buttonType}</button>
            </div>
            <hr className={styles.line}></hr>
        </div>
    );
}

export default Track;