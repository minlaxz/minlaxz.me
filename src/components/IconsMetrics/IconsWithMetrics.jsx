import React from 'react';
import * as data from './data';


const ProgrammingIcons = () => {
    return (
        <div className="col s12">
            {/* <h6 align="left">Programmings:</h6> */}
            <div style={{ display: "inline_block" }}>
                <br />
                {
                    data.programmings.map((programming, index) => {
                        return (
                            <img align="center" alt={programming.alt} height="40" width="50" src={programming.src} />
                        );
                    })
                }
            </div>
        </div>
    );
}

const ToolsIcons = () => {
    return (
        <div className="col s12">
            {/* <h6 align="left">Tools:</h6> */}
            <div style={{ display: "inline_block" }}>
                <br />
                {
                    data.tools.map((tool, index) => {
                        return (
                            <img align="center" alt={tool.alt} height="40" width="50" src={tool.src} />
                        );
                    })
                }
            </div>
        </div>
    );
}

const OSIcons = () => {
    return (
        <div className="col s12">
            {/* <h6 align="left">Operating Systems:</h6> */}
            <div style={{ display: "inline_block" }}>
                <br />
                {
                    data.operatingSystems.map((os, index) => {
                        return (
                            <img align="center" alt={os.alt} height="40" width="50" src={os.src} />
                        );
                    })
                }
            </div>
        </div>
    );
}

const DevOpsIcons = () => {
    return (
        <div className="col s12">
            {/* <h6 align="left">DevOps:</h6> */}
            <div style={{ display: "inline_block" }}>
                <br />
                {
                    data.devOps.map((devOps, index) => {
                        return (
                            <img align="center" alt={devOps.alt} height="40" width="50" src={devOps.src} />
                        );
                    })
                }
            </div>
        </div>
    );
}

const Metrics = () => (
    <>
        <div className="col s12 m6 l6 xl6">
            <img className="materialboxed responsive-img" src="https://metrics.lecoq.io/minlaxz" alt="Github Metrics" />
        </div>
        <div className="col s12 m6 l6 xl6">
            <img className="materialboxed responsive-img" src="https://github-readme-streak-stats.herokuapp.com/?user=minlaxz" alt="Github Streak Stats" />
        </div>
    </>
)

const IconsWithMetrics = () => (
    <>
        <div className="row center"> {/* ROW 1 START */}
            <ProgrammingIcons /> {/* COL */}
            <ToolsIcons /> {/* COL */}
            <DevOpsIcons /> {/* COL */}
            <OSIcons /> {/* COL */}
        </div> {/* ROW 1 END */}

        <div className="row center" style={{ marginTop: "5% " }}> {/* ROW 2 START */}
            <Metrics /> {/* COL */}
        </div> {/* ROW 2 END */}
    </>
);

export default IconsWithMetrics;