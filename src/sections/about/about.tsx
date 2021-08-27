import styles from "./about.module.scss";
import img2 from "../../assets/about/about-2.jpg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <h4>Turn Dreams into Reality</h4>
        <div className={styles.about__textArea}>
          <p>
            Aspiring <span>software engineer</span>, specialized in
            <span>Web applications</span>; I can convert your
            <span className={styles.figma}> Figma</span> design to a fully
            functioning website with the latest web technologies.
            <span className={styles.stack}>Primary stack: </span>
            <span className={styles.js}> JavaScript</span>,
            <span className={styles.react}> React.js</span>,
            <span className={styles.ts}> TypeScript</span>,
            <span className={styles.node}> Node.js</span>.
          </p>
          <p className={styles.stack}>
            <span className={styles.stack}>Secondary stack: </span>
            <span className={styles.csharp}> C#/.Net</span>,
            <span className={styles.angular}> Angular</span>,
            <span className={styles.ts}> TypeScript</span>,
            <span className={styles.node}> Node.js </span>. I'm also a recent
            graduate with a bachelor's degree in informatics engineering from
            Vilnius Tech University.
          </p>
        </div>

        <img src={img2} alt="E-commerace website" />
      </div>
    </section>
  );
};

export default About;
