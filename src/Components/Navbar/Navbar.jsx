import React from 'react'
import styles from './Navbar.module.css'
import Arrow from '../../assets/Arrow - Up 2.png'
import Category from '../../assets/Category.png'
import Editsquare from '../../assets/Editsquare.png'
import Paper from '../../assets/Paper.png'
import Ivan from '../../assets/Ivan.png'
import Search from '../../assets/Search.png'
import Notification from '../../assets/Notification.png'

function Navbar() {
  return (
    <div className={styles.NavContainer}>
        <div className={styles.firstRow}>
            <div >
            <span>Educator</span>
            <img src={Arrow} alt="arrow" />
            </div>
            <div className={styles.arthshala}>
                Arthshala
            </div>
        </div>
        <div className={styles.secondRow}>
            <div className={styles.planning}>
                <img src={Category} alt="category" />
                Planning
            </div>
            <div>
                <img src={Editsquare} alt="category" />
                Documentation
            </div>
            <div>
                <img src={Paper} alt="category" />
                Housekeeping
            </div>
        </div>
        <div className={styles.thirdRow}>
            <div>
                <img src={Search} alt="category" />
            </div>
            <div>
                <img src={Notification} alt="category" />
            </div>
            <div>
                <img src={Ivan} alt="category" />
                <img src= {Arrow} alt="arrow" />
            </div>
        </div>
    </div>
  )
}

export default Navbar