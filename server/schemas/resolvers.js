const { DJ, Show } = require('../models');

const resolvers = {
  Query: {
    djs: async () => {
      return await DJ.find({}).populate('Shows');
    },

    shows: async () => {
      return await Show.find({}).populate('host');
    },
  },
};

module.exports = resolvers;
