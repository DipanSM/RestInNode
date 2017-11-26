'use strict'																																																																																																						
var DynamoDB = require('dynamodb');
DynamoDB.AWS.config.region = 'us-west-2';
DynamoDB.AWS.config.endpoint = 'http://localhost:8000';

var Joi = require('joi');

var employeeSchema = new DynamoDB.define('Employee', {
	hashKey: 'id',
	schema: {
		id: Joi.number(),
		name: Joi.string(),
		contact: Joi.number(),
		link: Joi.string()
	},
	tableName: 'Employee'
});

module.exports = employeeSchema;