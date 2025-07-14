"use client";

import styles from './animated-orb.module.css';

export default function AnimatedOrb() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className={styles.orb} />
    </div>
  );
}
