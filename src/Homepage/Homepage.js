import styles from './Homepage.module.scss';

function Homepage() {
  return (
    <div className={styles.Homepage}>
        <h1 className="bg">AURADEV</h1>
        <div className={styles.iframes}>
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1245738751%3Fsecret_token%3Ds-IIAzUddc3Rl&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
        <div className={styles.theme}>
          <h2 className="md">A SOUND, A MESSAGE</h2>
        </div>
        {/* <div className={styles.gallery}>
            <img src="./27.jpg" alt="Dumb & blurry" />
            <img src="./28.jpg" alt="Dumb & blurry" />
            <img src="./00.jpg" alt="Dumb & blurry" />
            <img src="./34a.jpg" alt="Dumb & blurry" />
            <img src="./01.jpg" alt="Dumb & blurry" />
            <img src="./0a.jpg" alt="Dumb & blurry" />
            <img src="./01a.jpg" alt="Dumb & blurry" />
            <img src="./27.jpg" alt="Dumb & blurry" />
            <img src="./28.jpg" alt="Dumb & blurry" />
        </div> */}
        {/* <div className={styles.dates}>
          <h3 className="md">UPCOMING DATES</h3>
        </div> */}
        <div className={styles.dates}>
          <h3 className="md">SHOW HISTORY</h3>
          <div>
            <h4 className="md">Halloween Party @ The Schiller</h4>
            <h4 className="md">Oct 29, 2022</h4>
          </div>
        </div>
    </div>
  );
}

export default Homepage;
