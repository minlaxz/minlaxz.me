import React from "react";
// import M from "materialize-css";

// import { GistContext } from "../../contexts/GistContext";
import { storage } from "../../services/Firebase";

import MyPicture from "./MyPicture";
import MyInfo from "./MyInfo";
import myimage from "../../assets/itssssme.jpg";


const Temp = () => {
    return (
        <div className="mt-4">
            <p className="text-center text-sm md:text-base text-pink-500 dark:text-pink-700">
                This is
                <a
                    href="https://minlaxz-info--pr1-dev-jlhsl0fq.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600 dark:text-blue-800"> preview </a>
                and active development of
                <a
                    href="https://github.com/minlaxz/minlaxz.me/tree/dev"
                    target="_blank" rel="noopener noreferrer"
                    className="underline text-blue-600 dark:text-blue-800"> dev </a>
                branch.
                Every stable pull request to 'main' branch is going to be automatically built and deployed at Firebase
                <a
                    href="https://minlaxz-info.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600 dark:text-blue-800"> minlaxz </a>
                by github actions</p>
            {/* <pre className="text-xs text-center text-red-400 dark:text-red-800">Navigation dropdown is a bug.</pre> */}
        </div>
    )
}
const Me = ({ debugging }) => {
    let gists = { length: 22 };

    // const gists = React.useContext(GistContext);
    const [imageUrl, setImageUrl] = React.useState(null);
    const storageRef = storage.ref()
    React.useEffect(() => {
        if (!debugging) {
            storageRef.child('minlaxz-dev/images/itssssme.jpg').getDownloadURL()
                .then((url) => {
                    setImageUrl(url);
                })
        } else {
            setImageUrl(myimage);
        }
        // HandleAfterDocumentLoaded();
    }, [storageRef, debugging]);

    return (
        <div>
            <Temp />
            <div className="grid p-4 h-screen justify-center items-center grid-cols-12 gap-1 md:grid-cols-12 md:gap-6 lg:grid-cols-12 lg:gap-6 xl:grid-cols-12 xl:gap-6 2xl:grid-cols-12 2xl:gap-6">
                <MyPicture imageUrl={imageUrl} debugging={debugging} />
                <MyInfo gists={gists} />
            </div>
        </div>

    );
};



export default Me;