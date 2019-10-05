module.exports = {
    webpack(config) {
        config.node = { fs: 'empty' };
        return config;
    },
    env: {
        GRAPHQL_ENDPOINT: 'http://localhost:3000/api/graphql'
    }
};
