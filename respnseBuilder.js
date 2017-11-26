module.exports = {
	response: function(res, err, data) {
		if(err) {
			res.send(err);
			return
		}
		res.json(data);
	}
}

	