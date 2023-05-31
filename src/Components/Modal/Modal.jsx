import React, { useState } from 'react';
import styles from "./Modal.module.css";
import cross from '../../assets/cross.png';
import Calendar from 'react-calendar';
import Delete from '../../assets/Delete.jpg'
import Tick from '../../assets/tick.png'
import 'react-calendar/dist/Calendar.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';

function Modal({handleShowModal}) {

  const colors = ['#D16D9A' , '#938BE6' , '#E7C546' , '#02B683']
  const [periodName, setPeriodName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [repeatDays, setRepeatDays] = useState([false, false, false, false, false, false, false]);
  const [selectedColor, setSelectedColor] = useState('#D16D9A');
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
]);

  const handleDayClick = (index) => {
    const updatedRepeatDays = [...repeatDays];
    updatedRepeatDays[index] = !updatedRepeatDays[index];
    setRepeatDays(updatedRepeatDays);
  };
  
  const handleSelectedColor = (index) =>{
    setSelectedColor(colors[index]);
  }

  const handleAddPeriod = () => {
  };
  

  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <div>
          Add Period
        </div>
        <div>
          <img onClick={handleShowModal} src={cross} alt="Close" />
        </div>
      </div>
      <div className={styles.periodDetails}>
        <div className={styles.headingName}>
          Period Name
        </div>
        <div>
          <input
            placeholder='Enter Period Name'
            className={styles.periodName}
            value={periodName}
            onChange={(e) => setPeriodName(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.time}>
        <div className={styles.headingName}>
          Start Time
          <input
            type="time"
            value={startTime}
            className={styles.periodName}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className={styles.headingName}>
          End Time
          <input
            type="time"
            value={endTime}
            className={styles.periodName}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.headingName}>
        <div className={styles.repeatDays}>
          Repeat on days
        </div>
        <div className={styles.repeatEachDay}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div
              key={index}
              className={`${styles.dayCircle} ${repeatDays[index] ? styles.active : ''}`}
              onClick={() => handleDayClick(index)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
            <div className={styles.headingName}>
          From
            </div>
            <div className='calendar-container'>
                
            <DateRange
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
      </div>
        </div>
      </div>
      <div className={styles.modalFooter}>
        <div className={styles.colors}>
      {colors.map((color, index) => (
          <div
          key={index}
          className={`${styles.dayCircle} ${repeatDays[index] ? styles.active : ''}`}
          onClick={() => handleSelectedColor(index)}
          style={{ backgroundColor: color, opacity:'0.5' }}
          >
               {selectedColor === color && <img src={Tick} alt="Tick" />}
            </div>
          ))}
          </div>
      <div>
        <div className={styles.footerRight}>
          <img src={Delete} alt="Tick" />
          <button className={styles.addPeriodBtn} onClick={handleAddPeriod}>
            Add period
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Modal;
