import { gql } from 'apollo-server-micro';

const typeDefs = gql`
    type video {
        title: String
        embed: String
    }

    type summary {
        title: String
        url: String
        thumbnail: String
        date: String
        videos: [video]
    }

    type Query {
        summaries: [summary]
    }
`;

export default typeDefs;
