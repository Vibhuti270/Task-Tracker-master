import React from 'react'
import styles from "../styles/Bar/Bar.module.css";
import cross from "../images/cross.png";

const Bar = ({handleBack, title}) => {
    
  return (
    <div className={styles.btns}> 
        <div className={styles.close} onClick={handleBack}>
            <img src={cross} alt="" />
        </div>
        <span>{title}</span>
    </div>
  )
}

export default Bar
