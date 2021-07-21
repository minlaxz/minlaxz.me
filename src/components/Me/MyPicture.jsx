import React from "react";
import LargeLoading from "../Loading/Loading";

const MyPicture = ({imageUrl}) => {
    return (
        <div className="col-start-2 col-end-9">
            {imageUrl ?
                <div>
                    <p className="text-blue-500 dark:text-indigo-500" style={{ fontSize: "12px", margin: "2%" }}>This image is fetched from firebase bucket.</p>
                    <img
                        className=""
                        src={imageUrl}
                        alt="This is me at Bagan."
                        draggable={false}
                    />
                </div>
                :
                <div className="self-center">
                    <p className="text-red-500 dark:text-white">Fetching from firebase bucket...</p>
                    <LargeLoading />
                </div>

            }
        </div>



    );
};

export default MyPicture;
