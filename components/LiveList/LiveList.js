import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import List from './List';

const GET_LIVE_MATCHES = gql`
    query getLiveMatches {
        liveMatches{
          fixture_id
          event_date
          homeTeam {
            team_id
            team_name
            logo
          }
          awayTeam {
            team_id
            team_name
            logo
          }
          goalsHomeTeam
          goalsAwayTeam
          status
          league {
            name
            country
            logo
            flag
          }
          referee
          venue
          elapsed
        }
      }
`;

export default () => {
	const { loading, error, data } = useQuery(GET_LIVE_MATCHES);
	if (loading) return <p>Loading ...</p>;
	if (error || !data.liveMatches) return 'Error!';
	return <List liveMatches={data.liveMatches} />;
};
