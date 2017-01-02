var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ChartSchema = new Schema({
	
	symbol : String,
	Date   : { type: Date},
	value  : { type: Number}

	

});

module.exports = mongoose.model('chart', ChartSchema);