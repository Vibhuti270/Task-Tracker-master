import React from 'react'
import styles from "../styles/Task/Task.module.css";

import edit from "../images/edit.png";
import del from "../images/delete.png";
import view from "../images/view.png";
import { Link } from 'react-router-dom';

const Task = ({task}) => {
  return (
    <div className={styles.task}>
        <div className={styles.text}>
          <span className={styles.taskName}>{task.name}</span>
          <span className={styles.aname}>{task.assignee}</span>
          <span className={styles.date}>Start: {task.startDate}</span>
          <span className={styles.date}>{(task.endDate !== null) ? `End : ${task.endDate}` : ""}</span>
          <span className={styles.priority}>{task.priority}</span>
        </div>
        <div className={styles.btns}>
          <div className={styles.taskbtns}>
            <Link className="link" to={`task/view/${task.id}`}>
              <img src={view} alt="" />
            </Link>
          </div>
          
            {(task.status !== 'completed') ? 
              <div className={styles.taskbtns}>
                <Link className="link" to={`task/delete/${task.id}`}>
                  <img src={del} alt="" />
                </Link>
              </div>
              : ''
            }
          
          <div className={styles.taskbtns}>
            <Link className="link" to={`task/edit/${task.id}`}>
              <img src={edit} alt="" />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Task
