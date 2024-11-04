import React from 'react'
import styles from "../styles/Home/Home.module.css";
import myImage from "../images/filter.png";
import Main from "../components/Main";
import { Outlet } from 'react-router-dom';
import Filters from '../components/Filters';


const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.left}>
            <div className={styles.image}>
                <img src={myImage} alt="" />
            </div>
            <Filters/>
        </div>
        <div className={styles.right}>
            <Main/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home
