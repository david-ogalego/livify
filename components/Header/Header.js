import React from 'react';

export default () => (
    <React.Fragment>
        <header>
            <div className="container">
                <h6>Livify</h6>
            </div>
        </header>
        <style jsx>{`
            header {
                background-color: #3f51b5;
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

            .container {
                min-height: 64px;
                padding-left: 24px;
                padding-right: 24px;
                display: flex;
                position: relative;
                align-items: center;
                justify-content: center;
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
