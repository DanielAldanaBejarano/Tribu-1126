import React, { FC } from 'react';
import styles from './Objective.module.css';

interface ObjectiveProps {}

const Objective: FC<ObjectiveProps> = () => (
  <div className={styles.Objective}>
    Objective Component
  </div>
);

export default Objective;
