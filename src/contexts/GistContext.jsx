import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const GistContext = createContext();

const client = axios.create({baseURL: "https://api.github.com/users/minlaxz/gists"});


export const GistContextProvider = props => {
    const [gists, setGists] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await client.get();
            setGists(result.data);
        };
        fetchData();
        document.title = "🌠 from Minlaxz | Gists"
    }, []);
    // console.log(gists);
    return (
        <GistContext.Provider value={gists}>
            {props.children}
        </GistContext.Provider>
    );
};
