import React from 'react';

export default ({ title, url }) => (
    <>
        <h1>{title}</h1>
        <a href={url}>Got to live stream</a>
    </>
);
