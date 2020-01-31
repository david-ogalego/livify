import { LiveMatchesRepository, SummaryRepository} from '../repositories';

const summaryRepository = new SummaryRepository();
const liveMatchesRepository = new LiveMatchesRepository();

const resolvers = {
    Query: {
        summaries: () => {
            return summaryRepository.fetchSummaries();
        },
        summary: (_, { id }) => {
            return summaryRepository.fetchSummary(id);
        },
        liveMatches: () => {
            return liveMatchesRepository.fetchLiveMatches();
        },
    }
};

export default resolvers;
