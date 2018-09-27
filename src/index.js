// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var H = 50;
    var Q = 25;
    var D = 10;
    var N = 5;
    var P = 1;
    var obj = {};
    var currency;
    var rest;
    if(currency <= 0) {
    	 return obj = {};
    }

    if(currency > 10000) {
    	return obj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
     
    if(currency <= 1000) {
     	var h = Math.floor(currency / H);
     	rest =currency - (h * H);
     	var q = Math.floor(rest / Q);
     	rest = rest - (q * Q);
     	var d = Math.floor(rest / D);
     	rest = rest - (d * D);
     	var n = Math.floor(rest / N );
     	rest = rest - (n * N);
     	var p = Math.floor(rest / P);
     	if(h > 0) {obj["H"] = h};
     	if(q > 0) {obj["Q"] = q};
     	if(d > 0) {obj["D"] = d};
     	if(n > 0) {obj["N"] = n};
     	if(p > 0) {obj["P"] = p};
     }
     	return obj;
      }
    
