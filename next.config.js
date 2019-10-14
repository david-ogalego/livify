const prod = process.env.NODE_ENV === 'production';

module.exports = {
    webpack(config) {
        config.node = { fs: 'empty' };
        return config;
    },
    env: {
        GRAPHQL_ENDPOINT: prod
            ? 'https://livify.es/api/graphql'
            : 'http://localhost:3000/api/graphql'
    }
};
