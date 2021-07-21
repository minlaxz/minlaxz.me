import React from "react";
// import M from "materialize-css";

import { GistContext } from "../../contexts/GistContext";
import { storage } from "../../services/Firebase";

import MyPicture from "./MyPicture";
import MyInfo from "./MyInfo";
// import myimage from "../../assets/itssssme.jpg";

// const HandleAfterDocumentLoaded = () => {
//     const elems = document.querySelectorAll(".materialboxed");
//     M.Materialbox.init(elems, { inDuration: 500, outDuration: 500 });
// };

const Temp = () => {
    return (
        <>
            <p className="text-center text-sm md:text-base text-pink-500 dark:text-pink-700">
                This is preview and active development.
                Every stable pull request to 'main' is going to be automatically built and deployed at
                <a href="https://minlaxz.me" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-800">minlaxz.me</a>
                by github actions</p>
            <pre className="text-xs text-center text-red-400 dark:text-red-800">Navigation dropdown is a bug.</pre>
        </>
    )
}
const Me = () => {
    const gists = React.useContext(GistContext);
    const [imageUrl, setImageUrl] = React.useState(null);
    const storageRef = storage.ref()
    React.useEffect(() => {
        storageRef.child('minlaxz-dev/images/itssssme.jpg').getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })
        // HandleAfterDocumentLoaded();
    }, [storageRef]);

    return (
        <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg lg:p-0 xl:max-w-screen-xl xl:p-0">
            <Temp />
            <div className="min-h-screen grid justify-center items-center grid-cols-12 gap-4 md:grid-cols-12 md:gap-6 lg:grid-cols-12 lg:gap-6 xl:grid-cols-12 xl:gap-6 2xl:grid-cols-12 2xl:gap-6">
                <MyPicture imageUrl={imageUrl} />
                <MyInfo gists={gists} />
                {/* <MyInfo gists={{ gists: { length: 22 } }} /> */}
            </div>
        </div>

    );
};



export default Me;