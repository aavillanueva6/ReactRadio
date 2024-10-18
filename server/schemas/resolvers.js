const resolvers = {
  Query: {
    DJs: async () => {
      return DJs.find();
    },
  },
};
module.exports = resolvers;
