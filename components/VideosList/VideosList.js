import React from 'react';
import PropTypes from 'prop-types';
import Video from '../Video';

const VideosList = ({ videos }) => (videos && videos.length ? (
	<>
		<ul className="list">
			{videos.map(({ id, title, embed }) => (
				<li key={id} className="list-item">
					<Video title={title} embed={embed} />
				</li>
			))}
		</ul>
		<style jsx>
			{`
                .list {
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }
                .list-item {
                    flex-grow: 0;
                    flex-basis: 45%;
                    padding: 5px;
                    margin-left: 15px;
                    margin-right: 15px;
                }
                @media only screen and (max-width: 815px) {
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
) : null);

VideosList.propTypes = {
	videos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		embed: PropTypes.string.isRequired
	})).isRequired
};

export default VideosList;
