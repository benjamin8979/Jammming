import styles from './Searchbar.module.css';

function Searchbar(props) {
    return (
        <div className={styles.searchbar}>
            <input className={styles.input}/>
            <button className={styles.button} onClick={props.onClick}>Search</button>
        </div>
    );
}

export default Searchbar;