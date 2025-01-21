import React, { FC } from 'react';
import styles from './Plan.module.css';

interface PlanProps {}

const Plan: FC<PlanProps> = () => (
  <div className={styles.Plan}>
    Plan Component
  </div>
);

export default Plan;
