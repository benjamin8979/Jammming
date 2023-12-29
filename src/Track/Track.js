import styles from './Track.module.css';

function Track(props) {

    return(
        <div className={styles.Track}>
            <h5 className={styles.firstrow}>{props.name}</h5>
            <h6 className={styles.secondrow}>{props.artist} | {props.album}</h6>
            <h6 className={styles.thirdrow}>{props.playlist}</h6>
        </div>
    );
}

export default Track;