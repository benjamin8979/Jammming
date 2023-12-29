import styles from './Searchbar.module.css';

function Searchbar() {
    return (
        <div className={styles.searchbar}>
            <input className={styles.input}/>
            <button className={styles.button}>Search</button>
        </div>
    );
}

export default Searchbar;