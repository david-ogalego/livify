import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, title }) => (
	<>
		<div
			alt={title}
			className="image"
			style={{ backgroundImage: `url("${src}")` }}
		/>
		<style jsx>
			{`
            .image {
                display: block;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                height: 140px;
            }
        `}
		</style>
	</>
);

Image.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Image;
