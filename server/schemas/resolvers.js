const { DJ } = require('../models');

const resolvers = {
  Query: {
    DJ: async () => {
      return await DJ.find();
    },
  },
};

module.exports = resolvers;
