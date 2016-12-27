var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ChartSchema = new Schema({
	type : String,
	displayed : Boolean,
	data :{
	col : [{
		id : String,
		label : String,
		type : String
	},
	{
		id : String,
		label : String,
		type : Number
	},
	{
		id : String,
		label : String,
		type : Number
	},
	{
		id : String,
		label : String,
		type : Number
	},
	{
		id : String,
		label : String,
		type : Number
	}
	],
	
	row : [{
		c : [{
			v : String,
			f : String
		},
		{
			v : Number,
			f : String
		},
		{
			v : Number,
			f : String
		},
		{
			v : Number,
			f : String
		},
		{
			v : Number,
			f : String
		}]
	}]
}
	

});

module.exports = mongoose.model('chart', ChartSchema);