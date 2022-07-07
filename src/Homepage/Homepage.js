import styles from './Homepage.module.scss';

function App() {
  return (
    <div className={styles.Homepage}>
        <h1 className="bg">AURADEV</h1>
        <img src="./02a.jpg" alt="Dumb & blurry" />
        <div>
            <h2 className="md">A SOUND, A MESSAGE</h2>
            <img className={styles.rotate} src="./02a.jpg" alt="Dumb & blurry" />
            <img src="./02a.jpg" alt="Dumb & blurry" />
            <img className={styles.rotate} src="./02a.jpg" alt="Dumb & blurry" />
            <img src="./27.jpg" alt="Dumb & blurry" />
            <img src="./28.jpg" alt="Dumb & blurry" />
            <img src="./34a.jpg" alt="Dumb & blurry" />
            <img src="./0a.jpg" alt="Dumb & blurry" />
            <img src="./00.jpg" alt="Dumb & blurry" />
            <img src="./01.jpg" alt="Dumb & blurry" />
            <img src="./01a.jpg" alt="Dumb & blurry" />
        </div>
    </div>
  );
}

export default App;
