import React from 'react';

export default ({ logo, teamName, goals }) => (
    <React.Fragment>
        {/* <img className="imageCardMatch" src={logo} /> */}
        <div>
            <span className="nameTeam">{teamName}</span>
            <span className="goalsTeam">{goals}</span>
        </div>
        <style jsx>{`
            .imageCardMatch {
                height: 15px;
            }
            .goalsTeam {
                float: right;
            }
        `}
        </style>
    </React.Fragment>
);