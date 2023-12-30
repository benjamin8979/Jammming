import Tracklist from '../Tracklist/Tracklist';
import styles from './Searchresults.module.css';

function Searchresults(props) {

    return (
        <div className={styles.search}>
            <div className={styles.align}>
                <h2 className={styles.results}>Results</h2>
                <div></div>
            </div>
            <Tracklist tracks={props.tracks} buttonType="+"/>
        </div>
    );
}

export default Searchresults;