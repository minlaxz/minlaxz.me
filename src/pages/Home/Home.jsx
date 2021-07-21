import React from 'react';
// import styles from './Home.module.sass';
// import Me from "../../components/Me";
// import IconsWithMetrics from '../../components/IconsMetrics';
import Sample from '../../components/Sample/Sample';
import Toggle from '../../components/ThemeToggler/ThemeToggler';
import { ThemeProvider } from '../../contexts/ThemeContext';


const Home = () => {
    return (
        // <div className={styles.home}>
        //     <Me />
        //     <IconsWithMetrics />
        // </div>
        <ThemeProvider>
            <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                <Toggle />
            </div>
            <Sample />
            {/* <Me /> */}

        </ThemeProvider>
    );
}

export default Home;