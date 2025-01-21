import React, { FC } from 'react';
import styles from './Map.module.css';

interface MapProps {}

const Map: FC<MapProps> = () => (
  <div className={styles.Map}>
    Map Component
  </div>
);

export default Map;
