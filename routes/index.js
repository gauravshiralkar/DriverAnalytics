/*
 * GET home page.
 */

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){
  res.render('index');
};

exports.about = function(req, res){
	res.render('About');
};
	
exports.contact = function(req, res){
	res.render('Contact');
};
exports.getScatterChart = function(req, res){
	 res.render('ScatterChart');

};

exports.getScatterChart1 = function(req, res){
	res.render('ScatterChart1');
	
};

exports.getBarChart = function(req, res){
	 res.render('BarChart');

};

exports.getScoreVizChart = function(req, res){
	 res.render('shop');

};



exports.getScatter1 = function(req,res){
	dbConn.getScatter1(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUsr);
	
};

exports.calcInsu = function(req,res){
	var data;
	console.log("In index calc" + req.params.strUser);
	dbConn.calcInsu(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		res.send(rows);
	},req.params.strUser);	
	
};



exports.getScatter= function(req, res){
	dbConn.getScatter(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};

exports.getBar= function(req, res){
	dbConn.getBar(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};

exports.search= function(req,res){
	dbConn.search(function(err,rows){
		console.log('Search key= '+req.query.key);
		console.log('Rows from index= '+JSON.stringify(rows));
		 res.send('['+rows+']');
	},req.query.key);	
};

exports.getScoreVizData = function(req, res){
	dbConn.getScoreVizData(function(err,rows){
		console.log(rows);
		 res.send(rows);
	});	
	  
};