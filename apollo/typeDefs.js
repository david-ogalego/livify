import { gql } from 'apollo-server-micro';

const typeDefs = gql`
    type video {
        id: Int
        title: String
        embed: String
    }

    type summary {
        id: Int
        title: String
        url: String
        thumbnail: String
        date: String
        videos: [video]
    }

    type team {
        team_id: Int!
        team_name: String
        logo: String
    }

    type league {
        name: String
        country: String
        logo: String
        flag: String
    }

    type match {
        fixture_id: Int
        event_date: String
        homeTeam: team
        awayTeam: team
        goalsHomeTeam: Int
        goalsAwayTeam: Int
        status: String
        league: league
        elapsed: Int
        venue: String
        referee: String
    }

    type Query {
        summaries: [summary]
        summary(id: String!): summary
        liveMatches: [match]
    }
`;

export default typeDefs;
