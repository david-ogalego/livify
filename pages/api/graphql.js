import { ApolloServer, gql } from 'apollo-server-micro';
import fetch from 'node-fetch';

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

const resolvers = {
    Query: {
        summaries: () => {
            return fetch('https://www.scorebat.com/video-api/v1/').then(res =>
                res.json()
            );
        }
    }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false
    }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
