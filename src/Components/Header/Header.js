import styles from './Header.module.css';

// Header component
// Display app title "Jammming" at the top of the page
function Header() {
  return (
    <div className={styles.Header}>
      <header>
        <h1>Ja<span className={styles.mmm}>mmm</span>ing</h1>
      </header>
    </div>
  );
}

export default Header;