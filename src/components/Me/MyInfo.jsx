import React from "react";

const MyInfo = ({gists}) => {
    return (
        <div className="col s12 m12 l8 xl9">
            <p className="card-head" > "About : " </p>
            <div className="card-body" >
                <b
                    key="name"
                    style={{ color: "#FECB2E", fontWeight: "bolder" }}
                > Min Latt </b>
                    " from "
                    <a key="mmwiki" href="https://en.wikipedia.org/wiki/Myanmar"> Myanmar </a>, " 🇲🇲 (Burma).",

                    <ul key="ul_bg">
                    <li key="ttu">Background : B.E(EC) <a href="http://www.ttu.edu.mm/">(@TTU)</a> </li>
                    <li key="devops"> I know <a href="https://docker.com">Docker</a>, <a href="https://www.heroku.com">Heroku</a> and Some..</li>
                    <li key="github"> My super duper hub <a href="https://github.com/minlaxz"> github/minlaxz </a></li>
                    <li key="gists">I have <a href="https://gist.github.com/minlaxz"><span style={{ color: "red" }}>{gists.length}</span> gists</a> ( =&gt; react context.)</li>
                    {/* <div class="container-fluid justify-content-end">
                        <a href="#" >Gists</a>
                    </div> */}
                    <li key="thisapp">This website is maintained <a href="https://github.com/minlaxz/minlaxz.me">@minlaxz/minlaxz.me</a>.</li>

                    <p>When i push to "main" branch github workflows will automatically deploy to firebase for me.</p>
                    <p>Also when i PR to "main" branch flows will deploy for the preview <a href="https://github.com/minlaxz/minlaxz-dev/tree/main/.github/workflows">Checkout here</a></p> 
                </ul>
            </div>
        </div>
    );
};

export default MyInfo;
