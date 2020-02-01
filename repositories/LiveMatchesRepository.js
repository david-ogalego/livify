import fetch from 'isomorphic-unfetch';
import apiFootballKey from '../config/apiKeys';


const getMappedLiveMatches = async () => {
	const liveMatches = await fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/live?timezone=Europe/Madrid', {
		method: 'GET',
		headers: {
			'x-rapidapi-host': apiFootballKey.host,
			'x-rapidapi-key': apiFootballKey.key
		}
	});
	const liveMatchesJson = await liveMatches.json();
	return liveMatchesJson.api.fixtures;
};

const fetchLiveMatches = async () => {
	const liveMatches = await getMappedLiveMatches();
	return new Promise((resolve, reject) => {
		try {
			resolve(liveMatches);
		} catch (e) {
			reject(new Error(`Error getting live matches - ${e.message}`));
		}
	});
};

export default fetchLiveMatches;
