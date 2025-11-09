import styles from "./Hero.module.css";
import hero_left from "/HeroMandala.png";
import vfilms from "/VFilmsLogo.png";

function Hero() {
  return (
    <div className={styles.heroSection} id="#home">
      <div className={styles["hero-left"]}>
        <img className={styles.bgImage} src={hero_left} alt="" />
        <img className={styles.centerImage} src={vfilms} alt="" />
      </div>
      <div className={styles["hero-right"]}>
        <div className={styles["hero-right-first"]}>
          Varnan is where stories find <br /> their voice and form
        </div>
        <div className={styles["hero-right-second"]}>Films . Brands . Art</div>
        <p className={styles["hero-right-third"]}>
          Since 2009, V’ve been telling stories - stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way - by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories - V honors them.
        </p>
      </div>
    </div>
  );
}

export default Hero;
