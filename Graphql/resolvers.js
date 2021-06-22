const { users } = require('../data/mockData');
const resolvers = {
    Query: {
        getAllUsers() {
            return users;
        }
    }
};

module.exports = { resolvers };