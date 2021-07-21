import React from "react";
import M from "materialize-css";

import { GistContext } from "../../contexts/GistContext";
import { storage } from "../../services/Firebase";

import MyPicture from "./MyPicture";
import MyInfo from "./MyInfo";

const HandleAfterDocumentLoaded = () => {
    const elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems, { inDuration: 500, outDuration: 500 });
};

const Me = () => {
    const gists = React.useContext(GistContext);
    const [imageUrl, setImageUrl] = React.useState(null);
    const storageRef = storage.ref()
    React.useEffect(() => {
        storageRef.child('minlaxz-dev/images/itssssme.jpg').getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })
        HandleAfterDocumentLoaded();
    }, [storageRef]);

    return (
        <div className="grid grid-cols-12 gap-4" style={{ marginTop: "4%" }}>
            <MyPicture imageUrl={imageUrl} />
            <MyInfo gists={gists} />
        </div>
    );
};



export default Me;