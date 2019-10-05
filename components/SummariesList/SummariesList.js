import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import List from './List';

const GET_SUMMARIES = gql`
    query getSummaries {
        summaries {
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

export default () => {
    const { loading, error, data } = useQuery(GET_SUMMARIES);
    if (loading) return <p>Loading ...</p>;
    if (error) return 'Error!';
    if (data.summaries && data.summaries.length)
        return <List summaries={data.summaries} />;
};
