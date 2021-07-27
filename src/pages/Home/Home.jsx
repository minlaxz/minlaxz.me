import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import styles from './Home.module.sass';
import Me from "../../components/Me";
// import IconsWithMetrics from '../../components/IconsMetrics';
import { ThemeProvider } from '../../contexts/ThemeContext';


const Home = () => {
    return (

        <ThemeProvider>
            <div className="flex flex-col
                bg-white dark:bg-gray-800 
                transition-all duration-300">
                <div className="flex-grow-0">
                    <Navbar />
                </div>
                <div className="flex-1">
                    <Me debugging={true} />
                </div>


            </div>

        </ThemeProvider>
    );
}

export default Home;