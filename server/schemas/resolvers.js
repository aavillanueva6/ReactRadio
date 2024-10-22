const { DJ, Show } = require('../models');

const resolvers = {
  Query: {
    djs: async () => {
      return await DJ.find({}).populate('Shows');
    },

    shows: async () => {
      return await Show.find({}).populate('host');
    },

    singleDJ: async (parent, { url }) => {
      return await DJ.findOne({ url: url }).populate('Shows');
    },

    singleShow: async (parent, { url }) => {
      return await Show.findOne({ url: url }).populate('host');
    },
  },
};

module.exports = resolvers;
