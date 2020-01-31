import fetch from 'isomorphic-unfetch';
import apiFootballKey from '../config/apiKeys';


const getMappedLiveMatches = async () => {
    const liveMatches = await fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/live?timezone=Europe/Madrid", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": apiFootballKey.host,
            "x-rapidapi-key": apiFootballKey.key
        }
    })
    const liveMatchesJson = await liveMatches.json();
    return liveMatchesJson.api.fixtures;
};

export default class LiveMatchesRepository {
    async fetchLiveMatches() {
        return new Promise(async (resolve, reject) => {
            try {
                const liveMatches = await getMappedLiveMatches();
                resolve(liveMatches);
            } catch (e) {
                reject(`Error getting live matches - ${e.message}`);
            }
        });
    }
}
