import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return(
        <div>
            <div className={styles.menuWrap}>
                <input type="checkbox" className={styles.toggler}/>
                <div className={styles.hamburger}><div></div></div>
                <div className={styles.menu}>
                    <div>
                        <div>
                            <ul>
                                <li><a href="#">pink</a></li>
                                <li><a href="#">white</a></li>
                                <li><a href="#">grey</a></li>
                                <li><a href="#">blue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className={styles.showcase}>
                <div className={styles.header}>
                    <h1>Silk Site</h1>
                </div>
            </header>
        </div>
    );
};
