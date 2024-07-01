'use client'

import { useState } from 'react'
import styles from './resume.module.css'

type CardProps = {
        key: number,
        title: string,
        subtitle: string,
        date: string
        description: string,
}

export function ResumeCard({key, title, subtitle, date, description}: CardProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.resume__item}>
      <div className={styles.resume__header} onClick={() => setShowInfo(!showInfo)}>
        <h3 className={styles.resume__subtitle}>{title}</h3>
        <span className={`${styles.resume__icon} ${showInfo ? styles.activeIcon : ''}`}>{showInfo ? '-' : '+'}</span>
      </div>

      <div className={`${showInfo ? styles.showContent : ''} ${styles.resume__content}`}>
        <div className={styles.resume__dateTitle}>
          <h3 className={styles.resume__title}>{subtitle}</h3>
          <span className={`${styles.resume__date} text-cs`}>{date}</span>
        </div>

        <p className={styles.resume__description}>{description}</p>
      </div>
    </div>
  )
}
