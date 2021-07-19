import React from 'react';
import Clock from '../Clock/Clock';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <a href="/" className="brand-logo center remove-line" style={{ fontSize: "24px" }}>⚡️Hooks📌</a>
                    <a href="/"
                        data-target="mobile-demo"
                        className="sidenav-trigger show-on-medium-and-up remove-line left waves-effect waves-light">
                        <i className="medium material-icons">menu</i>
                    </a>
                    <a href="#!" className="right remove-line" style={{ fontSize: "15px", marginRight: "2%" }}><Clock /></a>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;