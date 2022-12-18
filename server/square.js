const { ApiError, Client, Environment } = require('square');

const { isProduction, EAAAEEnbZHpLOAcWL_I9hkh3DSkPUNkHM00PCD2DmJ_mOV6a_p1mOF0LSHlS3FIs } = require('./config');

const client = new Client({
  environment: isProduction ? Environment.Production : Environment.Sandbox,
  accessToken: EAAAEEnbZHpLOAcWL_I9hkh3DSkPUNkHM00PCD2DmJ_mOV6a_p1mOF0LSHlS3FIs,
});
//access token is from https://developer.squareup.com/apps/sq0idp-Axuh7v9sy1WYSXubJ4lQ8A/settings
module.exports = { ApiError, client };
