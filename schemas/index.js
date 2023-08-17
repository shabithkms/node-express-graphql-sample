const graphql = require("graphql");
const { UserType } = require("./typeDefs/userType");

const users = require("../users.json");

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new graphql.GraphQLList(UserType),
      args: {
        id: { type: graphql.GraphQLInt },
      },
      async resolve(parent, args) {
        console.log("users :>> ", users[0]);
        return users;
      },
    },
  },
});
const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        username: { type: graphql.GraphQLString },
        email: { type: graphql.GraphQLString },
        address: { type: graphql.GraphQLString },
        phone: { type: graphql.GraphQLString },
        website: { type: graphql.GraphQLString },
        company: { type: graphql.GraphQLString },
      },
      async resolve(parent, args) {
        console.log("args :>> ", args);
        let user = {
          id: users.length + 1,
          ...args,
        };
        users.push(user);
        return args;
      },
    },
  },
});

const schema = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
