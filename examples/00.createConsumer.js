var channel = require('../');
var btcLib = require('@owstack/btc-lib');


var refundKey = new btcLib.PrivateKey(btcLib.Networks.testnet);
var fundingKey = new btcLib.PrivateKey(btcLib.Networks.testnet);
var commitmentKey = new btcLib.PrivateKey(btcLib.Networks.testnet);

console.log('funding key: ' + refundKey.toString());
console.log('refund key: ' + fundingKey.toString());
console.log('commitment key: ' + commitmentKey.toString());
