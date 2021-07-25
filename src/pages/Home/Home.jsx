import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import styles from './Home.module.sass';
import Me from "../../components/Me";
// import IconsWithMetrics from '../../components/IconsMetrics';
import { ThemeProvider } from '../../contexts/ThemeContext';


const Home = () => {
    return (
        // <div className={styles.home}>
        //     <Me />
        //     <IconsWithMetrics />
        // </div>
        <ThemeProvider>
            <div className="static w-full bg-white dark:bg-gray-800 transition-all mx-auto">
                <Navbar />
                <Me debugging={true}/>
                {/* <IconsWithMetrics /> */}

            </div>

            {/* <Sample /> */}


        </ThemeProvider>
    );
}

export default Home;