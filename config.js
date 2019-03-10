var api = 'http://127.0.0.1:11246';
var donationAddress = "";
var blockTargetInterval = 60; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  10000000000000; // enter the total supply in atomic units
var symbol = 'osc'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "osc": [
	["oscillatepool", "http://oscillatepool.sytes.net:8117/"],
	["osc.llama.horse", "http://osc.llama.horse:8117/"]
 ]
};

var networkStat2 = {
    "trtl": [
	[""]
 ]
};
