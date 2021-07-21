import React from 'react';

const Sample = () => {
    return (
        // everything should be in this div
        <div className="bg-white dark:bg-gray-800 transition-all">
            <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg lg:p-0 xl:max-w-screen-xl xl:p-0">
                <div className="min-h-screen flex justify-center items-center">
                    <h1 className="text-gray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">
                        Persistent Dark Mode
                    </h1>
                </div>
            </div>
        </div>

    );
}

export default Sample;