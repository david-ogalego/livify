import React from 'react';
import Router from 'next/router';

export default ({ showPrevious }) => (
    <React.Fragment>
        <header>
            <div className="container">
                {showPrevious && (
                    <button onClick={() => Router.back()} className="back">
                        <div className="back-arrow"></div>
                    </button>
                )}
                <div className="container-title">
                    <h6>Livify</h6>
                </div>
            </div>
        </header>
        <style jsx>{`
            header {
                background-color: #32a6e4;
                top: 0;
                left: auto;
                right: 0;
                position: sticky;
                box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
                color: #fff;
                z-index: 1;
            }

            .back {
                cursor: pointer;
                background-color: transparent;
                width: 60px;
                height: 32px;
                margin-left: 35px;
                margin-top: 15px;
            }

            .back-arrow {
                background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==);
                transform: rotateY(180deg);
                width: 100%;
                height: 20px;
                transition: all 1.5s ease;
            }

            .back-arrow:hover {
                transform: rotateY(180deg) translateX(10px);
            }

            .container {
                display: flex;
                min-height: 64px;
            }

            .container-title {
                width: 77%;
                margin-left: 105px;
                justify-content: center;
                align-items: center;
                display: flex;
                position: absolute;
                top: 15px;
            }

            h6 {
                font-size: 1.25rem;
                font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                font-weight: 500;
                line-height: 1.6;
                letter-spacing: 0.0075em;
                margin: 0;
            }
        `}</style>
    </React.Fragment>
);
