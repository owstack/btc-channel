var channel = require('../');
var btccore = require('btccore-lib');


var refundKey = new btccore.PrivateKey(btccore.Networks.testnet);
var fundingKey = new btccore.PrivateKey(btccore.Networks.testnet);
var commitmentKey = new btccore.PrivateKey(btccore.Networks.testnet);

console.log('funding key: ' + refundKey.toString());
console.log('refund key: ' + fundingKey.toString());
console.log('commitment key: ' + commitmentKey.toString());
