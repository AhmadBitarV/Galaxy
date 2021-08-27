import emailjs from "emailjs-com";
import styles from "./contact.module.scss";
import Button from "../../components/buttons/button";
import { useState } from "react";
import location from "../../assets/contacts/global.svg";
import linkedin from "../../assets/contacts/linkedin1.svg";
import github from "../../assets/contacts/github.svg";
import email from "../../assets/gmailImage.svg";
import videoPlay6 from "../../assets/video6.mp4";
import me from "../../assets/me.jpeg";

export default function ContactUs() {
  ////// States //////
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [paragraph, setParagraph] = useState("");
  const [nametStyle, setNameStyle] = useState(styles.input__input);
  const [subjectStyle, setSubjectStyle] = useState(styles.input__input);
  const [messageStyle, setMessageStyle] = useState(styles.textarea);

  function sendEmail(e: any) {
    e.preventDefault();

    validateInput();
    if (
      name.trim().length > 1 &&
      subject.trim().length > 1 &&
      message.length > 1
    ) {
      emailjs
        .sendForm(
          "service_111eoov",
          "template_uoemsij",
          e.target,
          "user_tCu5QkchTIKIa6zooK1xt"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  const onNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameStyle(styles.input__input);
    setName(event.target.value);
  };

  const onSubjectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectStyle(styles.input__input);
    setSubject(event.target.value);
  };

  const onMessageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageStyle(styles.input__input);
    setMessage(event.target.value);
  };

  const validateInput = () => {
    if (name.trim().length < 6) {
      setNameStyle(`${styles.input__input} ${styles.red}`);
    }

    if (subject.trim().length < 1) {
      setSubjectStyle(`${styles.input__input} ${styles.red}`);
    }

    if (name.trim().length < 1 || subject.trim().length < 1) {
      setParagraph("Please fill all fields");
    }
  };

  return (
    <>
      <div className={styles.quote}>
        <h3>
          “Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.” <br />
          <span>Martin Fowler</span>
        </h3>
      </div>

      <div className={styles.contactMe}>
        <div className={styles.BGvideo2}>
          <video
            className={styles.BGvideo2__content}
            autoPlay={true}
            muted
            loop
          >
            <source src={videoPlay6} type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>
        <div className={styles.contactMe__contacts}>
          <p className={styles.contactMe__heading}>Let's get in touch</p>
          <img src={me} alt="Ahmad Bitar" className={styles.contactMe__me} />
          <p className={styles.contactMe__paragraph}>
            I'm open to front-end, back-end and full stack positions as well as
            freelancing
          </p>
          <div className={styles.contactMe__contact}>
            <img
              src={location}
              alt="Location icon"
              className={styles.contactMe__icon}
            />
            <p className={styles.contactMe__paragraph}>Lithuania - Vilnius</p>
          </div>

          <div className={styles.contactMe__contact}>
            <img
              src={linkedin}
              alt="Location icon"
              className={styles.contactMe__icon}
            />
            <a
              className={styles.links}
              href="https://www.linkedin.com/in/ahmedbitar"
            >
              <p
                className={`${styles.contactMe__paragraph} ${styles.contactMe__paragraph__hover}`}
              >
                linkedin.com/in/ahmedbitar
              </p>
            </a>
          </div>

          <div className={styles.contactMe__contact}>
            <img
              src={github}
              alt="Location icon"
              className={styles.contactMe__icon}
            />
            <a
              className={styles.links}
              href="https://www.github.com/AhmadBitarV"
            >
              <p
                className={`${styles.contactMe__paragraph} ${styles.contactMe__paragraph__hover}`}
              >
                github.com/AhmadBitarV
              </p>
            </a>
          </div>

          <div className={styles.contactMe__contact}>
            <img
              src={email}
              alt="Location icon"
              className={styles.contactMe__icon}
            />
            <p className={styles.contactMe__paragraph}>
              ahmed.bitar.v@gmail.com
            </p>
          </div>
        </div>

        <form className={styles.contactMe__form} onSubmit={sendEmail}>
          <div className={styles.input}>
            <label className={styles.input__label} htmlFor="">
              Name
            </label>
            <input
              onChange={onNameHandler}
              className={nametStyle}
              placeholder="John Smith"
              type="text"
            />
          </div>

          <div className={styles.input}>
            <label className={styles.input__label} htmlFor="">
              Title
            </label>
            <input
              onChange={onSubjectHandler}
              className={subjectStyle}
              placeholder="Join Us at XYZ"
              type="email"
            />
          </div>

          <div className={styles.input}>
            <label className={styles.input__label} htmlFor="">
              Email Address
            </label>
            <input
              onChange={onSubjectHandler}
              className={subjectStyle}
              placeholder="JohnSmith@example.com"
              type="email"
            />
          </div>

          <div className={styles.input}>
            <label className={styles.input__label} htmlFor="">
              Message
            </label>

            <textarea
              className={messageStyle}
              placeholder="Type your message here"
            ></textarea>
          </div>

          <Button className={styles.input__button} btnType="orange">
            Send
          </Button>
          <p className={styles.error}>{paragraph}</p>
        </form>
      </div>
    </>
  );
}
