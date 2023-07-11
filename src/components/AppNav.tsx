import React, { useState } from 'react';
import styles from '../components/nav.module.css'
import Image from 'next/image'



const AppNav = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleToggleNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  return (
   
    <nav className={`${styles.navbar} navbar navbar-expand-md`}>
    <div className={`container-fluid ${showNavbar ? styles.navbarBg : ''}`}>
      <div className={`${styles.pashionelogo} navbar-brand`}>
        <Image src="/pashionelogo.png" width={100} height={30} alt="pashione logo" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded={showNavbar ? 'true' : 'false'}
        aria-label="Toggle navigation"
        onClick={handleToggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`} id="navbarCollapse">
        <div className={`${styles.btns} navbar-nav ms-auto`}>
          <div>
            <button className={styles.loginbutton}>Login</button>
          </div>
          <div>
            <button className={`${styles.getstartedbutton} btn`}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default AppNav