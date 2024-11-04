import React from 'react'
import styles from "../styles/ViewPage/View.module.css";

const View = ({task}) => {
  return (
    <div className={styles.view}>
        <div className={styles.content}>
            <span className={styles.heading}>Name : </span>
            <span className={styles.value}>{task.name}</span>
        </div>
        <div className={styles.content}>
            <span className={styles.heading}>Description : </span>
            <span className={styles.value}>{task.desc}</span>
        </div>
        <div className={styles.content}>
            <span className={styles.heading}>Assignee : </span>
            <span className={styles.value}>{task.assignee}</span>
        </div>
        <div className={styles.content}>
            <span className={styles.heading}>Status : </span>
            <span className={styles.value}>{task.status}</span>
        </div>
        <div className={styles.content}>
            <span className={styles.heading}>Start Date : </span>
            <span className={styles.value}>{task.startDate}</span>
        </div>
        <div className={styles.content}>
            <span className={styles.heading}>End Date : </span>
            <span className={styles.value}>{task.endDate ? task.endDate : task.status}</span>
        </div>
        <div className={styles.content}>
            <span className={styles.heading}>Status : </span>
            <span className={styles.value}>{task.status}</span>
        </div>
        <div className={styles.content}>
            <span className={styles.heading}>Priority : </span>
            <span className={styles.value}>{task.priority}</span>
        </div>
    </div>
  )
}

export default View
