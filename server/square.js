const { ApiError, Client, Environment } = require('square');

const {
  isProduction,
  https://developer.squareup.com/apps/sq0idp-Axuh7v9sy1WYSXubJ4lQ8A/settings, 
  //insert accesss token from this website without parens/quotes
} = require('./config');

const client = new Client({
  environment: isProduction ? Environment.Production : Environment.Sandbox,
  accessToken: https://developer.squareup.com/apps/sq0idp-Axuh7v9sy1WYSXubJ4lQ8A/settings,
  //insert access token from this website without parens/quotes
});

module.exports = { ApiError, client };
