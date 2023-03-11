import React, { Component } from 'react';
import styles from './styles/footerStyle.module.css';

class Footer extends Component {
    render() { 
        return (
            <div>
		        <footer className={styles.footerDistributed}>
                    <div className={styles.footerRight}>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>
                    </div>
                    <div className={styles.footerLeft}>
                        <p className={styles.footerLinks}>
                            <a className={styles.link1} href="#">Home⠀·⠀</a>
                            <a className={styles.link1} href="#">Blog⠀·⠀</a>
                            <a className={styles.link1} href="#">Pricing⠀·⠀</a>
                            <a className={styles.link1} href="#">About⠀·⠀</a>
                            <a className={styles.link1} href="#">Faq⠀·⠀</a>
                            <a className={styles.link1} href="#">Contact</a>
                        </p>
                        <p style={{color: 'white'}}>© 1996-2022, Nile.com, Inc. or its affiliates</p>
                    </div>
                </footer>
            </div>
        );
    }
}
    
export default Footer;