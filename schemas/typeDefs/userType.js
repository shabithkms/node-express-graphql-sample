const graphql = require("graphql");

const AddressType = new graphql.GraphQLObjectType({
  name: "Address",
  fields: () => ({
    street: { type: graphql.GraphQLString },
    suite: { type: graphql.GraphQLString },
    city: { type: graphql.GraphQLString },
    zipcode: { type: graphql.GraphQLString },
    geo: { type: GeoType }, // Using the GeoType object type
  }),
});

const GeoType = new graphql.GraphQLObjectType({
  name: "Geo",
  fields: () => ({
    lat: { type: graphql.GraphQLString },
    lng: { type: graphql.GraphQLString },
  }),
});

const CompanyType = new graphql.GraphQLObjectType({
  name: "Company",
  fields: () => ({
    name: { type: graphql.GraphQLString },
    catchPhrase: { type: graphql.GraphQLString },
    bs: { type: graphql.GraphQLString },
  }),
});

const UserType = new graphql.GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    name: { type: graphql.GraphQLString },
    username: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    address: { type: AddressType }, // Using the AddressType object type
    phone: { type: graphql.GraphQLString },
    website: { type: graphql.GraphQLString },
    company: { type: CompanyType }, // Using the CompanyType object type
  }),
});

module.exports = {
  UserType,
};
