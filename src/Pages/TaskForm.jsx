import React, { useEffect, useState } from 'react'
import styles from "../styles/TaskForm/TaskForm.module.css";

import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import Bar from '../components/Bar';

const TaskForm = () => {
    const [style, setStyle] = useState({});
    const navigate = useNavigate();

    //for opening and closing animations
    //when component is loaded, scale it to 1 
    useEffect(()=>{
        setStyle({transform: "scale(1)"});

    }, [])

    function handleBack(){
        setStyle({transform: "scale(0)"});
        setTimeout(()=>{
            navigate('/')
        }, 100);
    }
  return (
    <div className={styles.form} style={style}>
        <Bar handleBack={handleBack} title={"Add Task"}/>
        <div className={styles.formMain}>
            <Form/>
        </div>
        <div className={styles.submit}></div>
    </div>
  )
}

export default TaskForm
