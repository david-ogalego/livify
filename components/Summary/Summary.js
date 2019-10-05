import React from 'react';
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

export default ({ id }) => {
    const { loading, error, data } = useQuery(GET_SUMMARY, {
        variables: { id: id }
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return 'Error!';
    if (data.summary) {
        const { title, url, thumbnail, videos } = data.summary;
        return (
            <SummaryDetail
                title={title}
                url={url}
                image={thumbnail}
                videos={videos}
            />
        );
    }
};
