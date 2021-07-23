import React from 'react';
import Toggle from '../ThemeToggler/ThemeToggler';
import Clock from '../Clock/Clock';
const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-row items-center px-1 h-16 border-b border-gray-200 z-10 bg-blue-300 dark:bg-purple-800 text-gray-700 dark:text-gray-200">
                <div className="flex-1">    
                    <Toggle />
                </div>
                <div className="flex-1">
                    <h3 className="text-red-600">⚡️ minlaxz 📌</h3>
                </div>
                <div className="flex-end">
                    <Clock />
                </div>
            </div>

        </nav>
    );
}

export default Navbar;