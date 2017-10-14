import express from 'express';
const request = require('request');
const yahooFinance = require('yahoo-finance');

exports.getFinancialData = function(req, res){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  console.log('iwubefiuwebfiuwe');
  yahooFinance.quote({
    symbol: req.params.symbol,
    modules: ['financialData']
  }, function(err, response){

    if(err) return(err);
    res.json(response);
  })
}

exports.getSummaryProfile = function(req,res){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: req.params.symbol,
    modules: ['summaryProfile']
  }, function(err, response){
    if(err) return(err);
    res.json(response);
  })
}

exports.getdefaultKeyStatistics = function(req, res){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: req.params.symbol,
    modules:['defaultKeyStatistics']
  }, function(err, response){
    if(err) return(err);
    res.json(response);
  })
}

exports.getPrice = function(req, res){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: req.params.symbol,
    modules:['price']
  }, function(err, response){
    if(err) return(err);
    res.json(response);
  })
}

exports.getCalenderEvents = function(req, res){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: req.params.symbol,
    modules:['calenderEvents']
  }, function(err, response){
    if(err) return(err);
    res.json(response);
  })
}

exports.getEarnings = function(req, res){
  var d = new Date();
  var dateNumber = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  yahooFinance.quote({
    symbol: req.params.symbol,
    modules:['earnings']
  }, function(err, response){
    if(err) return(err);
    res.json(response);
  })
}

