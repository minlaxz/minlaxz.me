import React from "react";
import LargeLoading from "../Loading/Loading";

const MyPicture = ({imageUrl}) => {
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
