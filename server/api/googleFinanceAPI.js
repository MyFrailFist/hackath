var express = require('express');
const request = require('request');
var googleFinance = require('google-finance');


exports.companyNews = function(params, callback){
	googleFinance.companyNews({
  		symbol: params,
	}, function (err, quotes) {
		console.log(quotes);
		if(err) return callback(err);
		return callback(null,quotes);
	});
}

exports.historicalData = function(params, callback){
	var d = new Date();
	console.log(d);
	var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();

	console.log(dateNumber.toString());
	googleFinance.historical({
		symbol: params,
  		from: dateNumber.toString(),
  		to: dateNumber.toString()
	}, function(err, quotes){
		console.log(quotes);
		if(err) return callback(err);
		return callback(null,quotes);
	})
}

exports.getAllData = function(params, callback){
	googleFinance.historicalData({
		symbol: [''],
		from:Date.now(),
		to:Date.now()
	}, function(err, response){
		if(err) return callback(err);
		return callback(null,response);
	})
}