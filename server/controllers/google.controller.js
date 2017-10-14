var express = require('express');
const request = require('request');
var googleFinance = require('google-finance');


exports.companyNews = function(req, res){
	googleFinance.companyNews({
  		symbol: req.params.symbol
	}, function (err, quotes) {
		console.log(quotes);
		if(err) return(err);
		return quotes;
	});
}

exports.historicalData = function(req, res){
	var d = new Date();
	console.log(d);
	var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();

	console.log(dateNumber.toString());
	googleFinance.historical({
		symbol: 'NASDAQ:AAPL',
  		from: dateNumber.toString(),
  		to: dateNumber.toString()
	}, function(err, quotes){
		console.log('weufbwieubf');
		console.log(quotes);
		if(err) return(err);
		return quotes;
	})
}

exports.getAllData = function(req, res){
	googleFinance.historicalData({
		symbol: [''],
		from:Date.now(),
		to:Date.now()
	}, function(err, response){
		if(err) return(err);
		return response;
	})
}