import React from 'react';

export default ({ title, embed }) => (
    <>
        <div className="detail">
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: embed }} />
        </div>
        <style jsx>{`
            .detail {
            }
        `}</style>
    </>
);
