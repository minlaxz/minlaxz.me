import React from "react";

const MyInfo = ({ gists }) => {
    return (
        <div className="flex-1 m-3">
            <p className="font-sans font-bold text-xl xl:text-2xl text-black dark:text-indigo-600" > "About : " </p>
            <div className="text-base md:text-lg lg:text-xl xl:text-lg">
                <ul key="ul_bg">
                    <li key="name" className="dark:text-white">
                        <span className="font-sans font-bold text-yellow-500 dark:text-yellow-400"> Min Latt </span> from "
                        <a key="mmwiki" href="https://en.wikipedia.org/wiki/Myanmar" className="underline text-blue-500 dark:text-purple-500" > Myanmar" 🇲🇲 (Burma).</a>
                    </li>
                    <li key="ttu" className="dark:text-white">Background : B.E(EC) <a href="http://www.ttu.edu.mm/" className="underline text-blue-500 dark:text-purple-500">(@TTU)</a> </li>
                    <li key="devops" className="dark:text-white" > I know <a href="https://docker.com" className="underline text-blue-500 dark:text-purple-500">Docker</a>, <a href="https://www.heroku.com" className="underline text-blue-500 dark:text-purple-500">Heroku</a> and Some..</li>
                    <li key="github" className="dark:text-white"> My super duper hub <a href="https://github.com/minlaxz" className="underline text-blue-500 dark:text-purple-500"> github/minlaxz </a></li>
                    <li key="gists" className="dark:text-white" >I have <a href="https://gist.github.com/minlaxz" className="underline text-blue-500 dark:text-purple-500"><span style={{ color: "red" }}>{gists.length}</span> gists</a> ( =&gt; react context.)</li>
                    {/* <div class="container-fluid justify-content-end">
                        <a href="#" >Gists</a>
                    </div> */}
                    <li key="thisapp" className="dark:text-white">This website is maintained <a href="https://github.com/minlaxz/minlaxz.me" className="underline text-blue-500 dark:text-purple-500">@minlaxz/minlaxz.me</a>.</li>

                    <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">When i push to "main" branch github workflows will automatically deploy to firebase for me.</p>
                    <p className="text-green-500 dark:text-green-700 text-sm md:text-base">Also when i PR to "main" branch flows will deploy for the preview <a href="https://github.com/minlaxz/minlaxz-dev/tree/main/.github/workflows" className="underline text-blue-500 dark:text-purple-500">Checkout here</a></p>
                </ul>
            </div>
        </div>
    );
};

export default MyInfo;
