import SummaryRepository from '../repositories/SummaryRepository';

const summaryRepository = new SummaryRepository();

const resolvers = {
    Query: {
        summaries: () => {
            return summaryRepository.fetchSummaries();
        }
    }
};

export default resolvers;
