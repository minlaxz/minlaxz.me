import React from 'react';
import { Link } from "react-router-dom";
import styles from './NavbarLinks.module.sass';

const NavbarLinks = () => {
    return ( 
        <ul className="sidenav sidenav-close blue-grey darken-2" id="mobile-demo">
                <li key="home">
                    <Link to='/' >
                        <p className={`waves-effect waves-light btn-small blue-grey darken-4 ${styles.btn_block}`}> Home </p>
                    </Link>
                </li>
                <li key="gists">
                    <Link to='/gists' >
                        <p className={`waves-effect waves-light btn-small blue-grey darken-4 ${styles.btn_block}`}> My Gists </p>
                    </Link>
                </li>
                <li key="iots">
                    <Link to='/iots' >
                        <p className={`waves-effect waves-light btn-small teal darken-4 ${styles.btn_block}`}>My Iots</p>
                    </Link>
                </li>
            </ul>
     );
}
 
export default NavbarLinks;