const bodyParser = require("body-parser");
const people = require("./peopleRoute");
let cors = require("cors");

module.exports = (app) => {
  app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));

  app.use(cors());

  app.use(people);
};
