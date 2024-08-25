import React from 'react'
import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={rocketLogo} alt="Website logo" />   
    </header>
  )
}

export default Header
