import React from 'react';
import Clock from '../../components/Clock/Clock';
// import styles from './Home.module.sass';
import Me from "../../components/Me";
import Nav from '../../components/Sample/Nav';
// import IconsWithMetrics from '../../components/IconsMetrics';
// import Sample from '../../components/Sample/Sample';
import Toggle from '../../components/ThemeToggler/ThemeToggler';
import { ThemeProvider } from '../../contexts/ThemeContext';


const Home = () => {
    return (
        // <div className={styles.home}>
        //     <Me />
        //     <IconsWithMetrics />
        // </div>
        <ThemeProvider>
            <div className="absolute left-0 top-0 mt-3 ml-3 md:mt-4 md:ml-4 lg:mt-4 lg:ml-4 xl:mt-4 xl:ml-6 2xl:mt-3 2xl:ml-6">
                <Toggle />
            </div>

            <div className="bg-white dark:bg-gray-800 transition-all">
                <Nav />
                <Clock />
                <Me />
            </div>

            {/* <Sample /> */}


        </ThemeProvider>
    );
}

export default Home;