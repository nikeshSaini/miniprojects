import React from "react";
import styles from "./button.module.css";
import { MdOutlineMessage } from "react-icons/md";
export default function Button(props) {
  return (
    <button
      className={`${
        props.isOutline ? styles.secondary_btn : styles.primary_btn
      }`}
    >
      {props.icon}
      {props.name}
    </button>
  );
}
