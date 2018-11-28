const cors = require("cors");
const morgan = require("morgan");
const config = require("../env/config.js");

const env = process.env.NODE_ENV;
const currentENV = () => {
  const envirnoment = config[env];
  const keys = Object.keys(envirnoment);
  const values = Object.values(envirnoment);

  let variables = "";
  for (let i = 0; i < keys.length; i += 1) {
    variables += `\x1b[33m• ${keys[i].toUpperCase()}\x1b[0m: ${values[i]} \n `;
  }
  return variables;
};

// eslint-disable-next-line no-console
console.log(
  `\n[ \x1b[1m${env.toUpperCase()} ENVIRONMENT\x1b[0m ]\n ${currentENV()}`
);

if (env !== "development") {
  // eslint-disable-next-line no-console
  console.log(
    `\n\x1b[1mYour application is running on: ${config[env].portal}\x1b[0m`
  );
}
//= ===========================================================//
/* APP MIDDLEWARE */
//= ===========================================================//
module.exports = app => {
  // / CONFIGS ///
  app.set("env", env); // sets current env mode (development, production or test)
  app.set("port", config[env].port); // current listening port
  app.set("portal", config[env].portal); // sets current front-end url

  // / FRAMEWORKS ///
  app.use(
    cors({
      credentials: true,
      origin: config[env].portal
    })
  ); // allows receiving of cookies/tokens from front-end
  app.use(morgan("tiny")); // logging framework
};
