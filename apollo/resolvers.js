import { fetchLiveMatches, SummaryRepository } from '../repositories';

const summaryRepository = new SummaryRepository();

const resolvers = {
	Query: {
		summaries: () => summaryRepository.fetchSummaries(),
		summary: (_, { id }) => summaryRepository.fetchSummary(id),
		liveMatches: () => fetchLiveMatches()
	}
};

export default resolvers;
