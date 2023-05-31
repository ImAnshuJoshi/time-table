import React, { useState } from 'react';
import styles from './PeriodNav.module.css';
import Plus from '../../assets/Plus.png'
import Modal from '../Modal/Modal';

function PeriodNav() {
  const [showModal , setShowModal] = useState(false);

  const handleShowModal = () =>{
    console.log(showModal)
    setShowModal(!showModal)
    console.log(showModal)
  }
  return (
    <div className={styles.PeriodNavContainer}>
     <div className={styles.details}>
        <div>April 10-17 <span>&#60; &nbsp;Today &nbsp; &#62;</span></div>
     </div>
     <div>
        <button onClick={handleShowModal}>
            <img src={Plus} alt='plus' />
            Add Period
        </button>
     </div>
     {
      showModal && 
      <>
       <div className={styles.backdrop} />
      <Modal handleShowModal={handleShowModal}/>
      </>
     }
    </div>
  );
}

export default PeriodNav;
