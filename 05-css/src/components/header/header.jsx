import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
        <h2>This will be in header</h2>
        <button className={styles.btn}>Header Button</button>
    </div>
  )
}

export default header