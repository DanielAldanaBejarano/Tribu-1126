import React, { FC } from 'react';
import styles from './Tribu.module.css';

interface TribuProps {}

const Tribu: FC<TribuProps> = () => (
  <div className={styles.Tribu}>
    Tribu Component
  </div>
);

export default Tribu;
