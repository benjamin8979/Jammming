import styles from './Searchbar.module.css';

// Searchbar Component 
// Where user can search for tracks to add to their playlist
function Searchbar(props) {
    
    // Calls the onSearch() function when the search button is clicked
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