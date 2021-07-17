// this is a socket for all pages
import React from 'react';

import Main from './components/Main/Main';
import Routes from './routes';
const Root = () => {
    return (
        <>
            <Main /> {/* <-- this is main header */}
            <Routes /> {/* <-- this is all routes */}
        </>
    );
}

export default Root;