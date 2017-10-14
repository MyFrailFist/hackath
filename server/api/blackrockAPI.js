import express from 'express';
const request = require('request');


exports.search = function(params, callback){
  var paramsId = params;
  var api = 'https://www.blackrock.com/tools/hackathon/search-securities?query=';
  var apiWithSearch = api + paramsId;
  request(apiWithSearch, function(err, response){
    if(err) return callback(err);
    return callback(null,res.json(response));
  })

}

exports.getPortfolio = function(params, callback){

  var api = "https://www.blackrock.com/tools/hackathon/portfolio-analysis?apiVersion=v1&betaPortfolios=SNP500&calculateExposures=true&calculatePerformance=true&calculateRisk=true&calculateStressTests=true&datesAsStrings=true&debugMode=true&jsonIncludeType=true&ognl=true&orderKeys=true&outputFormat=json&positions=AAPL~25%7CVWO~25%7CAGG~25%7CMALOX~25%7C&prettifyJson=true&riskFreeRatePortfolio=LTBILL1-3M&scenarios=HIST_20081102_20080911%2CHIST_20110919_20110720%2CHIST_20130623_20130520%2CHIST_20140817_20140101%2CUS10Y_1SD%3A%3AAPB%2CINF2Y_1SD%3A%3AAPB%2CUSIG_1SD%3A%3AAPB%2CSPX_1SD%3A%3AAPB%2CDXY_1SD%3A%3AAPB&useCache=true&useCacheSizeLimit=true&useZipped=false";
  request(api, function(err, json){
    if(err) {console.log("error found");return callback(err);}
    return callback(null, json);
  })
}

exports.data = function(params,callback){
  var api = "https://www.blackrock.com/tools/hackathon/security-data?query=";
  var apiWithSearch = api + params;
  request(apiWithSearch, function(err, json){
    console.log(json.toString)
    if(err) return callback(err);
    return callback(null, json);
  })
}

exports.performance = function(params, callback){
  var api = 'https://www.blackrock.com/tools/hackathon/performance?query=';
  var apiWithSearch = api + params;
  request(apiWithSearch, function(err, json){
    if(err) return callback(err);
    return callback(null, json);
  })
}

