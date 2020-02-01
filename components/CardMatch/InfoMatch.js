import React from 'react';
import PropTypes from 'prop-types';
import useCounter from './useCounter';

const InfoMatch = ({ status, elapsed }) => {
	const { minutes, seconds } = useCounter(elapsed);
	return (
		<>
			<div className="infoContainer">
				<span className="status">{status}</span>
				<span className="counter">
					{minutes}
:
					{seconds}
				</span>
			</div>
			<style jsx>
				{`
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
            `}
			</style>
		</>
	);
};


InfoMatch.propTypes = {
	status: PropTypes.string.isRequired,
	elapsed: PropTypes.number.isRequired
};

export default InfoMatch;
