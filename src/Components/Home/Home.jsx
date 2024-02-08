import React from 'react'
import styles from './Home.module.css'
import avatar from '../../Assets/Avatar.png'
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import javascript from '../../Assets/js.png'
import bootstrap from '../../Assets/bootstrap.png'
import react from '../../Assets/react.png'

export default function Home() {
  return(
    <>
        <div className={styles.left}>
            <img className={styles.avatar} src={avatar} alt="" />
        </div>
        <div className={styles.right}>
            <h2 className={styles.beeko}>
                Hey I’m Abubaker 
                A Web Developer
            </h2>
            <div className={styles.info}>
                Hi My name is AbubakerElsiddig And I’m a passionate Web Developer based in📍 Saudi Arabia, Medina
            </div>
            <div className={styles.stack}>
                 Tech Stack | 
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={javascript} alt="" />
                <img src={bootstrap} alt="" />
                <img src={react} alt="" />
            </div>
        </div>
    </>
  )
}
