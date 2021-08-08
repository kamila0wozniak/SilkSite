import React from 'react';
import styles from './Footer.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {

    return(
        <div className={styles.footerBackground}>
            <div className={styles.centerFooterContents}>
                <div className={styles.centerContents}>

                        <div className={styles.contents}>
                            <h3>Contact Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis pulvinar molestie. Sed mollis efficitur risus.</p>
                        </div>
                        <div className={styles.contents}>
                            <h3>Our Media</h3>
                            <div className={styles.iconsCenter}>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-instagram"></i>
                            </div>
                        </div>
                        <div className={styles.contents}>
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis pulvinar molestie. Sed mollis efficitur risus.</p>
                        </div>

                </div>
            </div>
        </div>
    );
};
