import React from 'react'
import styles from "../styles/Main/Main.module.css";
import Button from './Button';
import { status } from '../app/data';
import Card from './Card';
import { Link } from 'react-router-dom';
const Main = () => {
  console.log(status.length)
  return (
    <div className={styles.main}>
        <div className={styles.header}>
            <div className={styles.heading}>
                <span>TaskMaster</span>
            </div>
            <div className={styles.addTask}>
              {/*link to add tasks*/}
              <Link className='link' to={"/add"}>
                <Button text={"Add Task"}/>
              </Link>
            </div>
        </div>
        <div className={styles.tasks}>
            {/* columns for each status */}
            {status.map(item=>(
              <Card status={item} />
            ))}
        </div>
    </div>
  )
}

export default Main
