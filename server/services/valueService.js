const async = require('async');
const yahooAPI = require('../api/yahooFinanceAPI');
const googleAPI = require('../api/googleFinanceAPI');
const blackrockAPI = require('../api/blackrockAPI');
var math = require('mathjs');	

var dji = require('../config/constant');


exports.goPage3 = function(req, res){

	console.log(req);
	console.log("pokpok");
	var formula = req.params.formula;
	var indices = req.params.index;
	console.log(indices);
	exports.attachValues(formula, res);
}


exports.goPage2 = function(req, res){
	var textFormula = req.params.formula;
	res.render("page2", {textFormula});
}

exports.attachValues2 = function(formula, indicess){
	//after selecting the group of stocks to study, attach the values require

	//input the selected indices
	//input the chose equation

	var stockArray = dji;
	async.waterfall([
		// function(callback){
		// 	//query the prices for aladdin
		// 	async.each(stockArray, function(stock, ccb){

		// 		blackrockAPI.data(stock.symbol, function(err, response){
		// 			console.log("oiewnfowenfw");
		// 			if(err) return ccb(err);
		// 			stock.incomeYield = response.resultMap.SECURITY[0].incomeYield;
		// 			return ccb();
		// 		})
		// 	}, function(err, response){
		// 		if(err) return callback(err);
		// 		return callback(null, stockArray);
		// 	})
		// }, 
		function(callback){
			//attach api values
			async.each(stockArray.module, function(item, cccb){
				googleAPI.historicalData(item.symbol, function(err, response){
					if(err) return cccb(err);
					if(response[0]==null||response[0]==undefined){return cccb(err);}
					item.price = response[0].close;
					return cccb(null);
				})
			}, function(err, response){
				if(err) return callback(err);
				return callback(null);
			})

		},
		function(callback){
			//attach api values
			console.log(stockArray.module);
			async.each(stockArray.module ,function(stocki, ccccb){
				console.log('123123');
				yahooAPI.getFinancialData(stocki.symbol, function(err, response){
					
					if(err) return ccccb(err);
					for (var lame in response){
						stocki[lame] = response[lame];
					}
					console.log("hello", stocki);
					return ccccb(null);
				})
			}, function(err, response){
				console.log('end')
				if(err) return callback(err);
				return callback(null);
			})
		},
		function(callback){
			//equation as a json
			var equation = [
				{"coeff": "0.2", "variable": "totalRevenue"},
				{"coeff": "-0.4", "variable": "totalDebt"}
			]

			var stocksData = stockArray;
			calcMajor2(formula, stockArray.module, function(err, response){
				if(err) return callback(err);
				return callback(null,response)
			})
		}], function(err, results){
			if(err) return(err);
			
			var gun = JSON.stringify(stockArray.module);
			console.log(gun);
			res.redirect('page3', {gun});
			return callback(null,stockArray);
		})
}



exports.attachValues = function(req,res){
	//after selecting the group of stocks to study, attach the values require

	//input the selected indices
	//input the chose equation
	var stockArray = dji;
	async.waterfall([
		// function(callback){
		// 	//query the prices for aladdin
		// 	async.each(stockArray, function(stock, ccb){

		// 		blackrockAPI.data(stock.symbol, function(err, response){
		// 			console.log("oiewnfowenfw");
		// 			if(err) return ccb(err);
		// 			stock.incomeYield = response.resultMap.SECURITY[0].incomeYield;
		// 			return ccb();
		// 		})
		// 	}, function(err, response){
		// 		if(err) return callback(err);
		// 		return callback(null, stockArray);
		// 	})
		// }, 
		function(callback){
			//attach api values
			async.each(stockArray.module, function(item, cccb){
				googleAPI.historicalData(item.symbol, function(err, response){
					if(err) return cccb(err);
					if(response[0]==null||response[0]==undefined){return cccb(err);}
					item.price = response[0].close;
					return cccb(null);
				})
			}, function(err, response){
				if(err) return callback(err);
				return callback(null);
			})

		},
		function(callback){
			//attach api values
			console.log(stockArray.module);
			async.each(stockArray.module ,function(stocki, ccccb){
				console.log('123123');
				yahooAPI.getFinancialData(stocki.symbol, function(err, response){
					
					if(err) return ccccb(err);
					for (var lame in response){
						stocki[lame] = response[lame];
					}
					console.log("hello", stocki);
					return ccccb(null);
				})
			}, function(err, response){
				console.log('end')
				if(err) return callback(err);
				return callback(null);
			})
		},
		function(callback){
			//equation as a json
			var equation = [
				{"coeff": "0.2", "variable": "totalRevenue"},
				{"coeff": "-0.4", "variable": "totalDebt"}
			]

			var stocksData = stockArray;
			calcMajor(equation, stockArray.module, function(err, response){
				if(err) return callback(err);
				return callback(null,response)
			})
		}], function(err, results){
			if(err) return(err);
			
			var gun = JSON.stringify(stockArray.module);
			console.log(gun);
			res.render('page3', {gun});
			return stockArray;
		})
}


//function for calculating equation 
function calcMajor(equation, data, callback){
	//equation in json
	//data in array of json
	var equationLength = equation.length;
	async.each(data, function(data1, cb){
		var sum = 0;
		for(var i=0;i<equationLength;i++) {
			var coeff = equation[i].coeff;
			var variable = equation[i].variable;
			var varValue = data1[variable];
			sum += (coeff*varValue);
		}
		if(i==equationLength){
			data1.score = sum;
			
			return cb()
		}
	}, function(err, data){
		if(err) return callback(err);
		return callback(null, data);
	})
}

//using a direct math function
function calcMajor2(equation, data, callback){
	//equation in json
	//data in array of json

	async.each(data, function(data1, cb){
		var sum = 0;
		var ans = formulaCalc(data1, equation);
		data1.score = ans;
		return cb()
	}, function(err, data){
		if(err) return callback(err);
		return callback(null, data);
	})
}




//use in page 3 later
function formulaCalc(valuesInd,formula){
	//var node = Math.parse(formula, valuesInd);
	//var code = node.compile();
	console.log(formula);
	console.log(valuesInd);
	var scope = valuesInd;
	var ans = math.eval(formula,valuesInd);
	console.log(ans);
	return ans;
}


