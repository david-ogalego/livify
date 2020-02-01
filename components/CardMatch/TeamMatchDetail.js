import React from 'react';
import PropTypes from 'prop-types';

const TeamMatchDetail = ({ teamName, goals }) => (
	<>
		<div>
			<span className="nameTeam">{teamName}</span>
			<span className="goalsTeam">{goals}</span>
		</div>
		<style jsx>
			{`
            .imageCardMatch {
                height: 15px;
            }
            .goalsTeam {
                float: right;
            }
        `}
		</style>
	</>
);

TeamMatchDetail.propTypes = {
	teamName: PropTypes.string.isRequired,
	goals: PropTypes.number.isRequired
};

export default TeamMatchDetail;
