import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const List = ({ summaries }) => (
	<>
		<div className="containerRoot">
			<ul className="list">
				{summaries.map((summary, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<li className="list-item" key={index}>
						<Card summary={summary} />
					</li>
				))}
			</ul>
		</div>
		<style jsx>
			{`
                .containerRoot {
                    width: 100%;
                    box-sizing: border-box;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 10px;
                }

                .list {
                    width: 100%;
                    margin: 0 auto;
                    justify-content: center;
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }

                .list-item {
                    flex-grow: 0;
                    max-width: 24%;
                    flex-basis: 24%;
                    padding: 5px;
                }

                @media (min-width: 1280px) {
                    .containerRoot {
                        max-width: 1280px;
                    }
                }

                @media (min-width: 960px) {
                    .containerRoot {
                        padding-left: 32px;
                        padding-right: 32px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .list-item {
                        max-width: 100%;
                        flex-basis: 100%;
                        padding: 5px;
                        margin: 10px;
                    }
                }
            `}
		</style>
	</>
);

List.propTypes = {
	summaries: PropTypes.arrayOf({}).isRequired
};

export default List;
