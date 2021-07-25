import React, { useEffect } from "react";
import M from "materialize-css"

import Navbar from "./Navbar";
import NavbarLinks from "./NavbarLinks";

const HandleAfterDocumentLoaded = () => {
    const elems = document.querySelectorAll('.sidenav'); // sidenav is in the NavbarLinks.jsx
    // const instances = M.Sidenav.init(elems, { draggable: true });
    M.Sidenav.init(elems, { draggable: true });
};


const Main = () => {
    useEffect(() => {
        HandleAfterDocumentLoaded();
    }, []);


    return (
        <>
            <Navbar />
            <NavbarLinks />
        </>
    );
}

export default Main;