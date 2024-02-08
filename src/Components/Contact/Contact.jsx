import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contact}> Contact Us </div>
        <div className={styles.form}>
          <div className={styles.label}>Name: 
              <input type="text" name="" id="" />
          </div>
          <div className={styles.label}>Email:           
              <input type="text" name="email" id="" />
          </div>
          <div className={styles.message}>
            <div>Message: </div>
            <textarea name="message"  id="" cols="30" rows="10"></textarea>
          </div>
          <button className={styles.btn}>Send</button>
        </div>
    </div>
  )
}
