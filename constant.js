var constant = {}

constant.INVALID_REQUEST = {
	'statusCode' : '401',
	'messgae' : 'No API key in header'	
}

constant.ERROR = {
	'statusCode': '400',
	'message': 'Some error occurred. Please try again later :('
}

module.exports = constant