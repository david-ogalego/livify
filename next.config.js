const prod = process.env.NODE_ENV === 'production';

module.exports = {
    webpack(config) {
        config.node = { fs: 'empty' };
        return config;
    },
    env: {
        GRAPHQL_ENDPOINT: prod
            ? 'https://livify.davidgomezrequeijo.now.sh/api/graphql'
            : 'http://localhost:3000/api/graphql'
    }
};
