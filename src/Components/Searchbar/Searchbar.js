import styles from './Searchbar.module.css';

function Searchbar(props) {

    function handleClick() {
        props.onSearch(props.searchInput);
    }

    return (
        <div className={styles.searchbar}>
            <input className={styles.input} value={props.searchInput} onChange={props.onChange}/>
            <button className={styles.button} onClick={handleClick}>Search</button>
        </div>
    );
}

export default Searchbar;