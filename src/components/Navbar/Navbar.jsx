import React from 'react';
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../../contexts/ThemeContext";
import Clock from './Clock';

const Toggler = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <div className="transition duration-1000 ease-in-out">
            {theme === "dark" ? (
                <HiSun
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-yellow-500 dark:text-yellow-500 text-2xl cursor-pointer"
                />
            ) : (
                <HiMoon
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-gray-700 dark:text-gray-400 text-2xl cursor-pointer"
                />
            )}
            <p className="text-xs text-yellow-700 dark:text-white"> ☝ dude 🤣</p>
        </div>
    )
}

const Navbar = () => {
    return (
        <nav>
            <div
                className="flex flex-row 
                items-center justify-center 
                h-16
                bg-blue-300 dark:bg-purple-800 
                text-gray-700 dark:text-gray-200 
                transition duration-300">

                <div className="flex-1 ml-3">
                    <Toggler />
                </div>

                <div className="flex-1">
                    <h3 className="text-red-600 dark:text-blue-300"> ⚡️ minlaxz 📌 </h3>
                </div>

                <div className="flex-end mr-3">
                    <Clock />
                </div>

            </div>

        </nav>
    );
}

export default Navbar;