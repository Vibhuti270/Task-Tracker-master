import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../styles/Handle/Handle.module.css'

import { useNavigate } from 'react-router-dom';
import Bar from '../components/Bar';
import { useSelector } from 'react-redux';
import { taskSelector } from '../Redux/taskReducer';
import View from '../components/View';
import Edit from '../components/Edit';
import Delete from '../components/Delete';
const Handle = () => {

    const [style, setStyle] = useState({})
    const {type, id} = useParams();
    
    const navigate = useNavigate();
    
    const {tasks} = useSelector(taskSelector);
    
    const currentTask = tasks.filter(item => item.id.toString() === id)[0];
    
    
    useEffect(()=>{
        setStyle({transform: "scale(1)"});
    }, [])

    //function to redirect back to '/'
    function handleBack(){
        setStyle({transform: "scale(0)"}); //for the open and close animation
        setTimeout(()=>{
            navigate('/');    
        }, 100)
    }

  return (
    
    <div className={styles.main} style={style}>
        <Bar handleBack={handleBack} title={type}/>
        <div className={styles.content}>
            {(type === "view") ? <View task={currentTask}/> :
            (type==="edit") ? <Edit task={currentTask} handleBack={handleBack}/>
            :<Delete task={currentTask} handleBack={handleBack}/>}
        </div>
    </div>
  )
}

export default Handle
