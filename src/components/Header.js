import React,  { useState } from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import { Cross as Hamburger } from 'hamburger-react';


export default function Header() {

    const[ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [isOpen, setOpen] = useState(false);


    return(
        <div>
            <div className={styles.menuWrap}>
                <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={21}/>
                </div>
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
                <div className={styles.centerHeader}>
                    <a className={styles.header}><Link to="/">Silk Site</Link></a>
                </div>
            </header>
        </div>
    );
};
