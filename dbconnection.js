'use strict'

var DynamoDB = require('dynamodb');
DynamoDB.AWS.config.region = 'us-west-2';
DynamoDB.AWS.config.endpoint = 'http://localhost:8000';

module.exports = DynamoDB
