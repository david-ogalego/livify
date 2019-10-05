import SummaryRepository from '../repositories/SummaryRepository';

const summaryRepository = new SummaryRepository();

const resolvers = {
    Query: {
        summaries: () => {
            return summaryRepository.fetchSummaries();
        },
        summary: (_, { id }) => {
            console.log('Getting', id);
            return summaryRepository.fetchSummary(id);
        }
    }
};

export default resolvers;
