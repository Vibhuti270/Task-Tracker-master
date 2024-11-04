import React from 'react'
import styles from "../styles/Delete/Delete.module.css";
import { useDispatch } from 'react-redux';
import { actions } from '../Redux/taskReducer';

const Delete = ({task, handleBack}) => {
    const dispatch = useDispatch();

    function handleSubmit(){
        dispatch(actions.delete(task.id));
        dispatch(actions.resetFilter());
        handleBack();
    }
  return (
    <div className={styles.delete}>
        <p>Are You Sure to delete ?</p>
        <div className={styles.button}>
            <button className={`${styles.btn} ${styles.yes}`} onClick={handleSubmit}>Yes</button>
            <button className={`${styles.btn} ${styles.no}`} onClick={handleBack}>No</button>
        </div>
        
    </div>
  )
}

export default Delete
