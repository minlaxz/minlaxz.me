import React from "react";
import MyPicture from "./MyPicture";
import MyInfo from "./MyInfo";

const Me = () => {
    return (
        <div className="row" style={{ marginTop: "3%" }}>
            <MyPicture />
            <MyInfo />
        </div>
    );
};

export default Me;