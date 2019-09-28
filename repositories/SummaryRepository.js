import fetch from 'isomorphic-unfetch';

export default class SummaryRepository {
    fetchSummaries() {
        return fetch('https://www.scorebat.com/video-api/v1/').then(res =>
            res.json()
        );
    }
}
