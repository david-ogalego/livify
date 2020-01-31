import React from 'react';
import useCounter from './useCounter';

export default ({ status, elapsed }) => {
    const { minutes, seconds } = useCounter(elapsed);
    return (
        <React.Fragment>
            <div className="infoContainer">
                <span className="status">{status}</span>
                <span className="counter">{minutes}:{seconds}</span>
            </div>
            <style jsx>{`
                .infoContainer {
                    margin-top: 5px;
                }
                .status {
                    font-size: 12px;
                }
                .counter {
                    font-size: 12px;
                    float: right;
                }
            `}</style>
        </React.Fragment>
    );
};
