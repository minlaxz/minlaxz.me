import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../../contexts/ThemeContext";

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
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
            )}  <p className="text-xs text-yellow-700 dark:text-white"> ☝ Click this dude 🤣</p>
        </div>
    );
};
export default Toggle;