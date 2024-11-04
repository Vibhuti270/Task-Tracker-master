import React, { useState, useEffect, useRef } from 'react';
import styles from "../styles/Edit/Edit.module.css";
import { useDispatch } from 'react-redux';
import { actions } from '../Redux/taskReducer';

const Edit = ({ task, handleBack }) => {
  // Initializing priority state
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();
  // Updating priority state when task changes
  useEffect(() => {
    if (task && task.priority && task.status) {
      setPriority(task.priority);
      setStatus(task.status);
    }
  }, [task]);

  const pRef = useRef()
  const sRef = useRef()

  //dispatching actions to edit task
  const handleSubmit = ()=>{
    const data = {
        id: task.id,
        priority : pRef.current.value,
        status: sRef.current.value
    }
    dispatch(actions.edit(data));
    dispatch(actions.resetFilter());
    handleBack(); //this function redirects to '/'
    
  }

  return (
    <div className={styles.edit}>
      <div className={styles.heading}>
        <span>Editing the task - '{task.name}'</span>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          <span>Priority</span>
          <span>Status</span>
        </div>
        <div className={styles.box}>
         
          <select ref={pRef} name="priority" id="" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="p0">P0</option>
            <option value="p1">P1</option>
            <option value="p2">P2</option>
          </select>
          <select ref={sRef} name="priority" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="deployed">Deployed</option>
            <option value="deferred">Deferred</option>
          </select>
          <button className={styles.button} onClick={handleSubmit}>Edit Task</button>
        </div>
      </div>
    </div>
  )
}

export default Edit;
