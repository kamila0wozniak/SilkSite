import React,  { useState } from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";


export default function Header() {

    const[ isMenuOpen, setIsMenuOpen ] = useState(true);


    return(
        <div>
            <div className={styles.menuWrap}>
                <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}><div>dupa</div></div>
                {isMenuOpen && <div className={styles.menu}>
                    <ul>
                        <li><Link to="/pink">pink</Link></li>
                        <li><Link to="/white">white</Link></li>
                        <li><Link to="/grey">grey</Link></li>
                        <li><Link to="/blue">blue</Link></li>
                    </ul>
                </div>}
            </div>
            <header className={styles.showcase}>
                <div className={styles.header}>
                    <h1><Link to="/">Silk Site</Link></h1>
                </div>
            </header>
        </div>
    );
};
