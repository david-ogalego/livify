import React from 'react';

export default ({ src, title }) => (
    <>
        <div
            alt={title}
            className="image"
            style={{ backgroundImage: `url("${src}")` }}
        />
        <style jsx>{`
            .image {
                display: block;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                height: 140px;
            }
        `}</style>
    </>
);
