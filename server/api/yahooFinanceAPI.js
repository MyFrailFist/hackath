import express from 'express';
const request = require('request');
const yahooFinance = require('yahoo-finance');

exports.getFinancialData = function(params, callback){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  console.log(params);
  yahooFinance.quote({
    symbol: params,
    modules: ['financialData']
  }, function(err, response){
    console.log(response);
    if(err) return callback(err);
    if(response==null||response==undefined||response.length==0){return callback(err)}
    return callback(null,response.financialData);
  })
}

exports.getSummaryProfile = function(params,callback){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: params,
    modules: ['summaryProfile']
  }, function(err, response){
    if(err) return callback(err);
    return callback(null, response);
  })
}

exports.getdefaultKeyStatistics = function(params, callback){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: params,
    modules:['defaultKeyStatistics']
  }, function(err, response){
    if(err) return callback(err);
    return callback(null, response);
  })
}

exports.getPrice = function(params, callback){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: params,
    modules:['price']
  }, function(err, response){
    if(err) return callback(err);
    return callback(null,response);
  })
}

exports.getCalenderEvents = function(params, callback){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: params,
    modules:['calenderEvents']
  }, function(err, response){
    if(err) return callback(err);
    return callback(null,response);
  })
}

exports.getEarnings = function(params, callback){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: params,
    modules:['earnings']
  }, function(err, response){
    if(err) return(err);
    return callback(null, response);
  })
}

