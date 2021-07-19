import React, { useContext } from "react";
import { GistContext } from "../../contexts/GistContext";

const MyInfo = () => {
    const gists = useContext(GistContext);
    return (
        <div className="col s12 m12 l8 xl9">
            <p className="card-head" > "Who : " </p>
            <div className="card-body" >
                <b
                    key="name"
                    style={{ color: "#FECB2E", fontWeight: "bolder" }}
                > Min Latt </b>
                    " from "
                    <a key="mmwiki" href="https://en.wikipedia.org/wiki/Myanmar"> Myanmar </a>, " 🇲🇲 (Burma).",

                    <ul key="ul_bg">
                    <li key="ttu">Background : B.E(EC) <a href="http://www.ttu.edu.mm/">(@TTU)</a> </li>
                    <li key="os">Fav OS : Unix-Like 🧡 Ubuntu  </li>
                    <li key="programming">Programming : (Python, Javascript)</li>
                    <li key="framework">Framework ? Library : (Django, ReactJS, React Native)</li>
                    <li key="devops"> I know <a href="https://docker.com">Docker</a>, <a href="https://www.heroku.com">Heroku</a> and Some..</li>
                    <li key="github"> My Super Duper Github<a href="https://github.com/minlaxz"> minlaxz@github</a></li>
                    <li key="gists">I have <span style={{ color: "red" }}>{gists.length}</span> gists (dynamic value of react context.)</li>
                    {/* <div class="container-fluid justify-content-end">
                        <a href="#" >Gists</a>
                    </div> */}
                    <li key="thisapp">This is maintained  <a href="https://github.com/minlaxz/minlaxz-dev">@minlaxz/minlaxz-dev</a>.</li>

                    <p>When i push to "main" branch github workflows will automatically deploy to firebase for me.</p>
                    <p>Also when i PR to "main" branch flows will deploy for the preview <a href="https://github.com/minlaxz/minlaxz-dev/tree/main/.github/workflows">Checkout here</a></p>
                    <h5>TODO : Redux</h5>
                    <code> 👽️ Haha some idea... I want to make context for TODO connected with firebase database 🦄 </code>

                </ul>
            </div>
        </div>
    );
};

export default MyInfo;
