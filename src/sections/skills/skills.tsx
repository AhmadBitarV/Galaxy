import styles from "./skills.module.scss";
import { technologies } from "../../assets/technologies";

const Skills = () => {
  const skills = technologies.map((technology) => {
    return (
      <div key={technology.name} className={styles.technolgoies__technology}>
        <img src={technology.img} alt={technology.alt} />
        <p>{technology.name}</p>
      </div>
    );
  });
  return <section className={styles.technolgoies}>{skills}</section>;
};

export default Skills;
