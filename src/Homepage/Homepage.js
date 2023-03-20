import styles from './Homepage.module.scss';

function Homepage() {
  return (
    <div className={styles.Homepage}>
        <div className="containerFull">
          <div className="contentBox halfWidth">
            <h2>Featured Preview</h2>
            <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1376162581%3Fsecret_token%3Ds-mRCKv3yRffO&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
          <div className="contentBox halfWidth">
            <h2 className="md">Upcoming Dates</h2>
            <h4>TBA</h4>
          </div>
        </div>
        <div className={styles.dates}>
          <h3 className="md">SHOW HISTORY</h3>
          <div>
            <h4>Halloween Party @ The Schiller</h4>
            <h4>Oct 29, 2022</h4>
          </div>
          <div>
            <h4>Motrik/Blesst Chest/Auradev @ TurnTurnTurn</h4>
            <h4>March 10, 2023</h4>
          </div>
        </div>
        <div className={styles.gallery}>
            <img src="./27.jpg" alt="Dumb & blurry" />
            <img src="./28.jpg" alt="Dumb & blurry" />
            <img src="./00.jpg" alt="Dumb & blurry" />
            <img src="./34a.jpg" alt="Dumb & blurry" />
            <img src="./01.jpg" alt="Dumb & blurry" />
            <img src="./0a.jpg" alt="Dumb & blurry" />
            <img src="./01a.jpg" alt="Dumb & blurry" />
            <img src="./28.jpg" alt="Dumb & blurry" />
            <img src="./27.jpg" alt="Dumb & blurry" />
            <h1 className={styles.left}>DEBUT</h1>
            <h1 className={styles.center}>EP</h1>
            <h1 className={styles.right}>Fall 2023</h1>
        </div>
    </div>
  );
}

export default Homepage;
