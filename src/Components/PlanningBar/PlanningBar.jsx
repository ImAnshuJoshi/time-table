import React from 'react';
import styles from './PlanningBar.module.css';
import Search from '../../assets/Search.png';

function PlanningBar() {
  return (
    <div className={styles.PlanningbarContainer}>
      <div>
        <div>
          Project Planning
        </div>
        <div className={styles.weeklyPlanning}>
          Weekly Planning
        </div>
        <div>
          Planning insights
        </div>
      </div>
      <div className={styles.searchInput}>
        <img className={styles.searchIcon} src={Search} alt="category" />
        <input type="text" placeholder="Search for projects" className={styles.searchField} />
      </div>
    </div>
  );
}

export default PlanningBar;
