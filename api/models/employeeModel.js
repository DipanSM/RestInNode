'use strict'
var DynamoDB = require('../../dbconnection');
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
