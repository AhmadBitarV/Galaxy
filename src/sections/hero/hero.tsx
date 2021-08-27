import styles from "./hero.module.scss";
import videoPlay from "../../assets/bgvideo.mp4";
import Button from "../../components/buttons/button";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.BGvideo}>
        <video className={styles.BGvideo__content} autoPlay={true} muted loop>
          <source src={videoPlay} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className={styles.hero__content}>
        <h1 className={styles.animation}>Hi there, I'm Ahmad</h1>
        <h3 className={styles.animation}>
          I'm a FULL-STACK JavaScript Developer
        </h3>
        <p className={styles.animation}>
          I design and build user interfaces. Get in touch to convert your figma
          desgin to a fully functioning website with the latest web techologies.
        </p>
        <Button className={styles.animation} btnType="orange">
          Get in touch
        </Button>
      </div>
    </main>
  );
};

export default Hero;
