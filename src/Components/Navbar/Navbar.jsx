import React from 'react'
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
      <div className={styles.navCont}>
        <h2 className={styles.logo}> <Link to={''} className={styles.linkkk}> Beeko </Link> </h2>
        <ul className={styles.navbar}>
          <li> <Link className={styles.linkk} to={''}> Home </Link> </li>
          <li> <Link className={styles.linkk} to={'about'}> About </Link> </li>
          <li> <Link className={styles.linkk} to={'projects'}> Projects </Link> </li>
          <li> <Link className={[styles.linkk, styles.contact].join(' ')} to={'contact'}> Contact </Link> </li>
        </ul>
      </div>
    
  )
}
