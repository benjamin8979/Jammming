import styles from './Header.module.css';

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