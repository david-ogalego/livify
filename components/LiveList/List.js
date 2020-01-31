import React from 'react';
import CardMatch from '../CardMatch';

export default ({ liveMatches }) => {
    return (
        <React.Fragment>
            <div className="containerRoot">
                <ul className="list">
                    {liveMatches.map((match) => (
                        <li className="list-item" key={match.fixture_id}>
                            <CardMatch match={match} />
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
                .containerRoot {
                    width: 100%;
                    box-sizing: border-box;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 10px;
                }

                .list {
                    width: 100%;
                    margin: 0 auto;
                    justify-content: center;
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }

                .list-item {
                    flex-grow: 0;
                    max-width: 24%;
                    flex-basis: 24%;
                    padding: 5px;
                }

                @media (min-width: 1280px) {
                    .containerRoot {
                        max-width: 1280px;
                    }
                }

                @media (min-width: 960px) {
                    .containerRoot {
                        padding-left: 32px;
                        padding-right: 32px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .list-item {
                        max-width: 100%;
                        flex-basis: 100%;
                        padding: 5px;
                        margin: 10px;
                    }
                }
            `}</style>
        </React.Fragment>
    );
};
