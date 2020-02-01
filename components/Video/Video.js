import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ title, embed }) => (
	<>
		<div className="detail">
			<h2>{title}</h2>
			<div dangerouslySetInnerHTML={{ __html: embed }} />
		</div>
		<style jsx>
			{`
            .detail {
            }
        `}
		</style>
	</>
);

Video.propTypes = {
	title: PropTypes.string.isRequired,
	embed: PropTypes.string.isRequired
};

export default Video;
