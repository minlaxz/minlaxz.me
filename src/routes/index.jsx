import React from 'react';
import { Route } from "react-router-dom"
import Home from '../pages/Home/Home';
import Gists from '../pages/Gists/Gists';
import Iots from '../pages/Iots/Iots';
const Routes = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/gists" component={Gists} />
            <Route exact path="/iots" component={Iots} />
        </>
    );
}

export default Routes;