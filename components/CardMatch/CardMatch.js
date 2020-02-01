import React from 'react';
import PropTypes from 'prop-types';
import TeamMatchDetail from './TeamMatchDetail';
import InfoMatch from './InfoMatch';

const CardMatch = ({ match }) => (
	<>
		<div className="cardContainer">
			<div className="cardArea">
				<div className="cardContent">
					<TeamMatchDetail
						teamName={match.homeTeam.team_name}
						goals={match.goalsHomeTeam}
					/>
					<TeamMatchDetail
						teamName={match.awayTeam.team_name}
						goals={match.goalsAwayTeam}
					/>
					<InfoMatch
						status={match.status}
						elapsed={match.elapsed}
					/>
				</div>
			</div>
		</div>
		<style jsx>
			{`
            .cardContainer {
                border-radius: 4px;
                box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
                    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
                transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                overflow: hidden;
            }

            .cardArea {
                color: inherit;
                border: 0;
                cursor: pointer;
                margin: 0;
                display: inline-flex;
                outline: 0;
                padding: 0;
                position: relative;
                align-items: center;
                user-select: none;
                border-radius: 0;
                vertical-align: middle;
                -moz-appearance: none;
                justify-content: center;
                text-decoration: none;
                background-color: transparent;
                width: 100%;
                display: block;
                text-align: inherit;
                -webkit-appearance: none;
                -webkit-tap-highlight-color: transparent;
            }

            .cardContent {
                padding: 16px;
                background-color: #c5c5c5;
            }

            p {
                font-size: 0.875rem;
                font-family: 'Muli', 'Helvetica', 'Arial', sans-serif;
                font-weight: 400;
                line-height: 1.43;
                letter-spacing: 0.01071em;
                color: rgba(0, 0, 0, 0.54);
                margin: 0;
                color: #3a3a3a;
            }
        `}
		</style>
	</>
);

CardMatch.propTypes = {
	match: PropTypes.shape({
		homeTeam: PropTypes.shape({
			team_name: PropTypes.string
		}),
		awayTeam: PropTypes.shape({
			team_name: PropTypes.string
		}),
		goalsHomeTeam: PropTypes.number,
		goalsAwayTeam: PropTypes.number,
		status: PropTypes.string,
		elapsed: PropTypes.number
	}).isRequired
};

export default CardMatch;
