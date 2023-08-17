const express = require("express");
const app = express();
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = 3000;
app.listen(port, () => {
  console.log("Server listening on port: http://localhost:" + port);
});
