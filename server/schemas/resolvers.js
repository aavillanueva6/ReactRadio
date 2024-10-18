const { DJ, Show } = require('../models');

const resolvers = {
  Query: {
    DJ: async () => {
      return await DJ.find();
    },

    Show: async () => {
      return await Show.find();
    },
  },
};

module.exports = resolvers;
