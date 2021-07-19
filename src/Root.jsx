// this is a socket for all pages
import React from 'react';
import { Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";

// context providers
import { GistContextProvider } from './contexts/GistContext';

// components and pages
import Main from './components/Main/Main';
import Home from './pages/Home/Home';
import Gists from './pages/Gists/Gists';
import Iots from './pages/Iots/Iots';
const Root = () => {
    return (
        <Router>
            <Main />

            <Route exact path="/" component={Home} />
            <GistContextProvider>
                <Route exact path="/gists" component={Gists} />
            </GistContextProvider>
            <Route exact path="/iots" component={Iots} />
        </Router>
    );
}

export default Root;