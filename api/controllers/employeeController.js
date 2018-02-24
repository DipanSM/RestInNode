'use strict'

var Employee = require('../models/employeeModel');
//var responseBuilder = require('../../respnseBuilder.js');

module.exports = {

	/*
 	@param
 		None
 	@return
		Json array of all employees
	*/
	getAllEmployee :function(req, res) {
		Employee
			.scan()
			.exec(function (err, data){
				if(err){
					res.send(err);
					return;
				}
				res.json(data);
			});
	},

	/*
 	@param
 		id of employee as a path variable
 	@return
		Json array of specific employee
	*/
	getEmployee: function(req, res) {
		var id = parseInt(req.params.id);
		Employee
			.get(id, function (err, data){
				if(err){
					res.send(err);
					return;
				}
				res.json(data);
			});
	},

	/*
 	@param
 		Employee details in request body
 	@return
		Json object of created employee
	*/
	addEmployee: function(req, res) {
		var id = parseInt(req.body.id);
		var name = req.body.name;
		var contact = parseInt(req.body.contact);
		var link = req.body.link;

		//apply validation
		var params ={
			'id': id,
			'name': name,
			'contact': contact,
			'link': link
		};

		Employee
			.create(params, function (err, data){
				if(err){
					res.send(err);
					return;
				}
				res.json(data);
			});
	},

	/*
 	@param
 		Emloyee id to be delted
 	@return
		Json object of deleted of employee
	*/
	deleteEmployee: function(req, res) {
		var id = parseInt(req.params.id);

		Employee
			.destroy(id, function (err, data){
				if(err){
					res.send(err);
					return;
				}
				res.json(data);
			});
	},
<<<<<<< HEAD

}
=======
	
}
>>>>>>> 1cdcff5f70e40b0b0391b0f663c62d65ae80f79e
