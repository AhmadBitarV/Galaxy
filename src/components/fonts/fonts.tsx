import React from "react";
import styles from "./fonts.module.scss";

type typography =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "SubTitle"
  | "special";

const Fonts: React.FC<{
  elementType: typography;
  elementColor?: "orange" | "white";
  className?: string;
}> = (props) => {
  let elementStyle = "";
  let element = "";
  switch (props.elementType) {
    case "h1":
      elementStyle = styles.h1;
      element = props.elementType;
      break;

    case "h2":
      elementStyle = styles.h2;
      element = props.elementType;

      break;
    case "h3":
      elementStyle = styles.h3;
      element = props.elementType;

      break;

    case "h4":
      elementStyle = styles.h4;
      element = props.elementType;

      break;

    case "h5":
      elementStyle = styles.h5;
      element = props.elementType;

      break;

    case "h6":
      elementStyle = styles.h6;
      element = props.elementType;

      break;

    case "p":
      elementStyle = styles.paragraph;
      element = props.elementType;

      break;

    case "special":
      elementStyle = styles.special;
      element = props.elementType;

      break;

    case "SubTitle":
      elementStyle = styles.subTitle;
      element = "h6";
      break;

    default:
      break;
  }

  let classStyle = elementStyle;
  if (props.elementColor === "orange") {
    classStyle = `${elementStyle} ${styles.orangeColor}`;
  } else if (props.elementColor === "white") {
    classStyle = `${elementStyle} ${styles.whiteColor}`;
  }

  return React.createElement(
    element,
    { className: `${classStyle} ${props.className}` },
    props.children
  );
};

export default Fonts;
