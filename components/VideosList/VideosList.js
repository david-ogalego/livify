import React from 'react';
import Video from '../Video';

export default ({ videos }) =>
    videos && videos.length ? (
        <>
            <ul className="list">
                {videos.map(({ title, embed }) => (
                    <li className="list-item">
                        <Video title={title} embed={embed} />
                    </li>
                ))}
            </ul>
            <style jsx>{`
                .list {
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }
                .list-item {
                    flex-grow: 0;
                    max-width: 50%;
                    flex-basis: 50%;
                    padding: 5px;
                }
            `}</style>
        </>
    ) : null;
