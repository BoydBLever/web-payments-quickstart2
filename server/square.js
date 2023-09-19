const { ApiError, Client, Environment } = require('square');

const {
  isProduction,
  // You probably need to replace this with a valid configuration value.
  accessToken
 } = require('./config');

const client = new Client({
  environment: isProduction ? Environment.Production : Environment.Sandbox,
  accessToken: null
});

module.exports = { ApiError, client };
