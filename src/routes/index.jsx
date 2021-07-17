import React from 'react';
import { Route } from "react-router-dom"
import Home from '../pages/Home/Home';
import Gists from '../pages/Gists/Gists';
import Iots from '../pages/Iots/Iots';
import { GistContextProvider } from '../contexts/GistContext';

const Routes = () => {
    return (
        <GistContextProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/gists" component={Gists} />
            <Route exact path="/iots" component={Iots} />
        </GistContextProvider>
    );
}

export default Routes;