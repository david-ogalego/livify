import fetch from 'isomorphic-unfetch';

const getMappedSummaries = async () => {
    const summaries = await fetch('https://www.scorebat.com/video-api/v1/');
    const summariesJson = await summaries.json();
    return summariesJson.map((summary, index) => {
        const newVideos =
            summary.videos && summary.videos.length
                ? summary.videos.map((video, index) => {
                      return {
                          id: index,
                          ...video
                      };
                  })
                : [];
        return {
            id: index,
            ...summary,
            videos: newVideos
        };
    });
};

export default class SummaryRepository {
    async fetchSummaries() {
        return new Promise(async (resolve, reject) => {
            try {
                const summaries = await getMappedSummaries();
                resolve(summaries);
            } catch (e) {
                reject(`Error getting highlights - ${e.message}`);
            }
        });
    }

    async fetchSummary(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const summaries = await getMappedSummaries();
                const summary = summaries.find(
                    summary => summary.id === parseInt(id, 10)
                );
                resolve(summary);
            } catch (e) {
                reject(`Error getting highlights - ${e.message}`);
            }
        });
    }
}
