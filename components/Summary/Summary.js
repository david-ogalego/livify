import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import SummaryDetail from './SummaryDetail';

const GET_SUMMARY = gql`
    query getSummary($id: String!) {
        summary(id: $id) {
            id
            title
            url
            thumbnail
            date
            videos {
                id
                title
                embed
            }
        }
    }
`;

const SummaryQuery = ({ id }) => {
	const { loading, error, data } = useQuery(GET_SUMMARY, {
		variables: { id }
	});
	if (loading) return <p>Loading ...</p>;
	if (error || !data || !data.summary) return 'Error!';

	const {
		title, url, thumbnail, videos
	} = data.summary;
	return (
		<SummaryDetail
			key={id}
			title={title}
			url={url}
			image={thumbnail}
			videos={videos}
		/>
	);
};

SummaryQuery.propTypes = {
	id: PropTypes.number.isRequired
};

export default SummaryQuery;
