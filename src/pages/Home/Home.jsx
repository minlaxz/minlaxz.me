import React from 'react';
import styles from './Home.module.sass';
import Me from "../../components/Me";
import IconsWithMetrics from '../../components/IconsMetrics';

const Home = () => {
    return (
        <div className={styles.home}>
            <Me />
            <IconsWithMetrics />
        </div>
    );
}

export default Home;