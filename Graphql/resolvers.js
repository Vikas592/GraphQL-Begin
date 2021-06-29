// import users from '../data/mockData'
const usersJSON = require('../data/Mock-Data.json');
const NEW_USER= "NEW_USER";
const resolvers = {
  Query: {
    getAllUsers: () => (usersJSON)
  },

  Mutation: {
    createUser: (_, args, {pubsub})=> {
      const newUser = args
      newUser.id = usersJSON.length;
      usersJSON.push(newUser)
      pubsub.publish(NEW_USER, {
          newUser: usersJSON
      });
      return newUser
    },
  },

  Subscription:{
      newUser:{
          subscribe: (_, __, {pubsub})=> pubsub.asyncIterator(NEW_USER)
      }
  }
}

module.exports = { resolvers }
