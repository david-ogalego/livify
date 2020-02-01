import React from 'react';
import PropTypes from 'prop-types';
import VideosList from '../VideosList';

const SummaryDetail = ({ title, url, videos }) => (
	<>
		<main className="container">
			<h1>{title}</h1>
			<a href={url}>Got to live stream</a>
			<VideosList videos={videos} />
		</main>
		<style jsx>
			{`
            @media (min-width: 1280px) {
                .container {
                    max-width: 1280px;
                    padding-left: 32px;
                    padding-right: 32px;
                    margin: 0 auto;
                }
            }

            h1 {
                padding-left: 15px;
            }

            a {
                margin-left: 15px;
            }
        `}
		</style>
	</>
);

SummaryDetail.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	videos: PropTypes.arrayOf({}).isRequired
};

export default SummaryDetail;
