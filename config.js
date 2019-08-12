var api = 'http://127.0.0.1:11246';
var donationAddress = "";
var blockTargetInterval = 60; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  10000000000000; // enter the total supply in atomic units
var symbol = 'osc'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "osl": [
	["Oscillate Pool", "http://oscillatepool.ml:8117/"],
	["Llama Horse", "http://osc.llama.horse:8117/"],
	["Line Pool", "http://osc.line-pool.ru/"],
	["Spooky Pool", "http://spookypool.nl/OSL"]
 ]
};

var networkStat2 = {
    "trtl": [
	[""]
 ]
};
