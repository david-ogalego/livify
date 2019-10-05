import React from 'react';
import VideosList from '../VideosList';

export default ({ title, url, videos }) => (
    <>
        <h1>{title}</h1>
        <a href={url}>Got to live stream</a>
        <VideosList videos={videos} />
    </>
);
