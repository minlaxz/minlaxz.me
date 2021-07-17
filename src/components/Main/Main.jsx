import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css"

import Clock from '../Clock/Clock';
import styles from './Main.module.sass';

const HandleAfterDocumentLoaded = () => {
    const elems = document.querySelectorAll('.sidenav');
    // const instances = M.Sidenav.init(elems, { draggable: true });
    M.Sidenav.init(elems, { draggable: true });
};


const Navbar = () => {
    useEffect(() => {
        HandleAfterDocumentLoaded();
    }, []);


    return (
        <>
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
                        {/* <ul className="left hide-on-med-and-down">
                            <li><a href="sass.html" className="remove-line">Login</a></li>
                            <li><a href="badges.html" className="remove-line" >My Gists <span>{gists.length}</span></a></li>
                        </ul> */}
                    </div>
                </nav>
            </div>
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
                {/* <li key='dashboard'>
                    <Link to='/dashboard' >
                        <p className={`${user.userInfo ? "blue-grey darken-4" : "red darken-4"} waves-effect waves-light btn-small btn-block`}>
                            {user.userInfo ? <i className="material-icons right">dashboard</i> : <i className="material-icons right">input</i>}
                            {user.userInfo ? `Your Dashboard` : "You may Login"}
                        </p>
                    </Link>
                </li> 
                {user.userInfo &&
                    <li key='editinfo'>
                        <Link to='/edituserinfo' >
                            <p className="purple darken-4 waves-effect waves-light btn-small btn-block">
                                <i className="material-icons right">edit</i>Edit Info
                            </p>
                        </Link>
                    </li>
                }
                {user.userInfo &&
                    <li key='chatroom'>
                        <Link to='/messages' >
                            <p className="pink darken-3 waves-effect waves-light btn-small btn-block disabled">
                                <i className="material-icons right">message</i>Your Messages
                            </p>
                        </Link>
                    </li>
                }
                {user.userInfo &&
                    <li key="logout">
                        <Link to="">
                            <p className="btn btn-small waves-effect waves-light red darken-4 btn-block" onClick={logOut}>
                                <i className="material-icons right">exit_to_app</i>Log Out
                            </p>
                        </Link>
                    </li>
                }
                <li>
                    {user.userInfo ? <Link to='/dashboard'>logged in.</Link> : <Link to='/login'>you're not logged in.</Link>}
                </li> */}
            </ul>
        </>
    );
}

export default Navbar;