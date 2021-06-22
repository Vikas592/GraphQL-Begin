const { users } = require('../data/mockData');
const resolvers = {
    Query: {
        getAllUsers() {
            return users;
        }
    },

    Mutation: {
        createUser(parent, args) {
            const newUser = args;
            users.push(newUser);
            return newUser;
        }
    }
};

module.exports = { resolvers };