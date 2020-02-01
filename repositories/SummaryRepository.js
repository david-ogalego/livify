import fetch from 'isomorphic-unfetch';

export default class SummaryRepository {
	getMappedSummaries = async () => {
		const summaries = await fetch('https://www.scorebat.com/video-api/v1/');
		const summariesJson = await summaries.json();
		return summariesJson.map((summary, index) => {
			const newVideos = summary.videos && summary.videos.length
				? summary.videos.map((video, indexVideo) => ({
					id: indexVideo,
					...video
				}))
				: [];
			return {
				id: index,
				...summary,
				videos: newVideos
			};
		});
	};

	async fetchSummaries() {
		const summaries = await this.getMappedSummaries();
		return new Promise((resolve, reject) => {
			try {
				resolve(summaries);
			} catch (e) {
				reject(new Error(`Error getting highlights - ${e.message}`));
			}
		});
	}

	async fetchSummary(id) {
		const summaries = await this.getMappedSummaries();
		return new Promise((resolve, reject) => {
			try {
				const summary = summaries.find(
					(summaryItem) => summaryItem.id === parseInt(id, 10)
				);
				resolve(summary);
			} catch (e) {
				reject(new Error(`Error getting highlights - ${e.message}`));
			}
		});
	}
}
