'use strict'
module.exports = function(app) {
	var employeeController = require('../controllers/employeeController');

	app.route('/employee')
		.get(employeeController.getAllEmployee);

	app.route('/employee/:id')
		.get(employeeController.getEmployee);

	app.route('/employee')
		.post(employeeController.addEmployee);	

	app.route('/employee/:id')
		.delete(employeeController.deleteEmployee);
};