import React from "react";
import LargeLoading from "../Loading/Loading";

const MyPicture = ({imageUrl, debugging}) => {
    return (
        <div className="flex-1 m-3">
            {imageUrl ?
                <div className="self-center">
                    <p className="text-xs xl:text-base text-center text-blue-500 dark:text-indigo-500">
                    {!debugging ? `This is fetched from firebase bucket.` : `DebugMode : ${debugging}`}
                    </p>

                    <img
                        className="w-2/3 lg:w-1/4 xl:w-2/5"
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
