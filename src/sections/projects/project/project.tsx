import Button from "../../../components/buttons/button";
import styles from "./project.module.scss";

interface ProjectType {
  name: string;
  designer: string;
  designerLink?: string;
  tech1: string;
  tech2: string;
  status: string;
  difficulty: string;
  image: string;
  githubRepo?: string;
}

const Project: React.FC<ProjectType> = (props) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__side} ${styles.card__side__front}`}>
        <img
          src={props.image}
          className={styles.card__picture}
          alt={props.name}
        />
        <h4 className={styles.card__heading}>
          <span
            className={`${styles.card__heading_span} ${styles.card__heading_span__1}`}
          >
            {props.name}
          </span>
        </h4>
        <div className={styles.card__details}>
          <ul>
            <li>Designer: {props.designer} </li>
            <li>{props.tech1}</li>
            <li>{props.tech2}</li>
            <li>
              Status:{" "}
              <span
                className={
                  props.status === "Completed" ? styles.green : styles.yellow
                }
              >
                {props.status}
              </span>
            </li>
            <li>
              Difficulty: <span>{props.difficulty}</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.card__side} ${styles.card__side__back} ${styles.card__side__back_1}`}
      >
        <div className={styles.card__cta}>
          <Button btnType="orange">Check source code</Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
