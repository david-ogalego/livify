import fetch from 'isomorphic-unfetch';

export default class SummaryRepository {
    async fetchSummaries() {
        return new Promise(async (resolve, reject) => {
            try {
                const summaries = await fetch(
                    'https://www.scorebat.com/video-api/v1/'
                );
                const summariesJson = await summaries.json();
                const summariesResult = summariesJson.map((summary, index) => {
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
                resolve(summariesResult);
            } catch (e) {
                reject(`Error getting highlights - ${e.message}`);
            }
        });
    }
}
