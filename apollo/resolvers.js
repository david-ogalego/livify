import SummaryRepository from '../repositories/SummaryRepository';

const summaryRepository = new SummaryRepository();

const resolvers = {
    Query: {
        summaries: () => {
            return summaryRepository.fetchSummaries();
        },
        summary: (_, { id }) => {
            return summaryRepository.fetchSummary(id);
        }
    }
};

export default resolvers;
