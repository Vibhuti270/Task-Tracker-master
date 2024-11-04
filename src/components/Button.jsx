import React from 'react'
import styles from "../styles/Button/Button.module.css";
const Button = ({text}) => {
  return (
    <div className={styles.btn}>
        <span>{text}</span>
    </div>
  )
}

export default Button
