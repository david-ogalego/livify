import React from 'react';
import VideosList from '../VideosList';

export default ({ title, url, videos }) => (
    <>
        <main className="container">
            <h1>{title}</h1>
            <a href={url}>Got to live stream</a>
            <VideosList videos={videos} />
        </main>
        <style jsx>{`
            @media (min-width: 1280px) {
                .container {
                    max-width: 1280px;
                    padding-left: 32px;
                    padding-right: 32px;
                }
            }

            h1 {
                padding-left: 15px;
            }

            a {
                margin-left: 15px;
            }
        `}</style>
    </>
);
