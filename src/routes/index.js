const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
  app.use(pessoas);
};
