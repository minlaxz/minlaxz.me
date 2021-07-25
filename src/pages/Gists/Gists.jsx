import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { GistContext } from "../../contexts/GistContext";
import styles from './Gists.module.sass';

const Gists = () => {
    const gists = useContext(GistContext);
    useEffect(() => {
        window.document.title = `🌠 from Minlaxz | ${gists.length} Gists`
    })
    return (
        <div className={`container-fluid justify-content-start ${styles.gist_color} ${styles.root_grid}`}>  {/*  style={{ color: "lightblue" }} */}
            {gists.length === 0 ? <p>Fetching gists, please wait...</p> : <p>Total : {gists.length}</p>}
            <ol>
                {
                    gists !== [] ? gists.map(gist =>
                        <li key={gist.id}><a target="_blank" rel="noreferrer" href={`https://gist.github.com/${gist.id}`}>{gist.description}</a></li>
                    ) : <p>Fetching ...</p>
                }
            </ol>
            <Link to="/">
                <button className="btn btn-secondary btn-sm" style={{ margin: "2%" }}> Back Home</button>
            </Link>
        </div>
    );
};

export default Gists;
