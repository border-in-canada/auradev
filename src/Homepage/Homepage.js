import styles from './Homepage.module.scss';

function Homepage() {
  return (
    <div className={styles.Homepage}>
        <h1 className="bg">AURADEV</h1>
        <div className={styles.iframes}>
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1315510762%3Fsecret_token%3Ds-JvLje2vls3F&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1245738751%3Fsecret_token%3Ds-IIAzUddc3Rl&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1245736894%3Fsecret_token%3Ds-VmPO4oyGyFC&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1335421930%3Fsecret_token%3Ds-MzEtCYuWQ8b&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
        <div className={styles.dates}>
          <h3 className="md">DATES TBD</h3>
        </div>
    </div>
  );
}

export default Homepage;
