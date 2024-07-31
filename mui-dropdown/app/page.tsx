"use client"

import React from 'react';
import Dropdown from './components/Dropdown';
import styles from './page.module.css';

const options = [
  'Option 1',
  <h5 key="2">Option 2</h5>,
  <div key="3" className={styles.customTag}>
    <span className={styles.customTagIcon}>🏷️</span>
    Custom Option 3
  </div>,
];

const Home: React.FC = () => (
  <div className={styles.pageContainer}>
    <div className={styles.dropdownWrapper}>
      <div>
        <h2>Single Selection Dropdown</h2>
        <Dropdown options={options} multiple={false} />
      </div>
      <div>
        <h2>Multiple Selection Dropdown</h2>
        <Dropdown options={options} multiple={true} />
      </div>
    </div>
  </div>
);

export default Home;
