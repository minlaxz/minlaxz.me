import React, { useEffect, useState } from "react";
import M from "materialize-css";
import { storage } from "../../services/Firebase";
import LargeLoading from "../Loading/Loading";

const HandleAfterDocumentLoaded = () => {
    const elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems, { inDuration: 500, outDuration: 500 });
};

const MyPicture = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const storageRef = storage.ref()
    useEffect(() => {
        storageRef.child('minlaxz-dev/images/itssssme.jpg').getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })
        HandleAfterDocumentLoaded();
    }, [storageRef]);
    return (
        <div>
            {imageUrl ?
                <div>
                    <p className="blue-text" style={{ fontSize: "12px", margin: "2%" }}>This image is fetched from firebase bucket.</p>
                    <img
                        className="col s7 m6 l4 xl3 materialboxed responsive-img"
                        src={imageUrl}
                        alt="This is me at Bagan."
                        draggable={false}
                    />
                </div>
                :
                <div className="center">
                    <p className="white-text">Fetching from firebase bucket...</p>
                    <LargeLoading />
                </div>

            }
        </div>



    );
};

export default MyPicture;
