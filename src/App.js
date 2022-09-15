import Homepage from './Homepage/Homepage';
import styles from './App.module.scss';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className={styles.App}>
      <img src="./02a.jpg" alt="Dumb & blurry" />
      <img className={styles.rotate} src="./02a.jpg" alt="Dumb & blurry" />
      <img style={{marginTop: "-6px"}}src="./02a.jpg" alt="Dumb & blurry" />
      <img className={styles.rotate} src="./02a.jpg" alt="Dumb & blurry" />
      <header className={styles.AppHeader}>
      </header>
      <main>
        <Homepage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
