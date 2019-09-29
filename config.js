const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    graphql_endpoint: process.env.GRAPHQL_ENDPOINT
};
