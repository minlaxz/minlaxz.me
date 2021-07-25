import React from "react";
import LargeLoading from "../Loading/Loading";

const MyPicture = ({imageUrl, debugging}) => {
    return (
        <div className="col-start-1 col-end-8 md:col-start-2 md:col-end-8 lg:col-start-2 lg:col-end-6 xl:col-start-2 xl:col-end-6 2xl:col-start-2 2xl:col-end-5">
            {imageUrl ?
                <div>
                    <p className="text-xs xl:text-base text-center text-blue-500 dark:text-indigo-500">
                    {!debugging ? `This is fetched from firebase bucket.` : `DebugMode : ${debugging}`}
                    

                    </p>
                    <img
                        className=""
                        src={imageUrl}
                        alt="This is me at Bagan."
                        draggable={false}
                    />
                </div>
                :
                <div className="self-center">
                    <p className="text-red-500 dark:text-yellow-500">Fetching from firebase bucket...</p>
                    <LargeLoading />
                </div>

            }
        </div>



    );
};

export default MyPicture;
