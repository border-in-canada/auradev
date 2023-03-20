import Homepage from './Homepage/Homepage';
import styles from './App.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
