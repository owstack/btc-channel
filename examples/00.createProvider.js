var channel = require('../');
var btccore = require('btccore-lib');


var providerKey = new btccore.PrivateKey(btccore.Networks.testnet);

console.log('provider key: ' + providerKey.toString());
