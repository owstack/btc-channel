'use strict';

var btcLib = require('@owstack/btc-lib');
var fs = require('fs');
var PrivateKey = btcLib.PrivateKey;
var Provider = require('../lib/Provider');

var providerKey = new PrivateKey('75d79298ce12ea86863794f0080a14b424d9169f7e325fad52f60753eb072afc');

var provider = new Provider({
  key: providerKey,
  paymentAddress: providerKey.toAddress()
});

var payment = JSON.parse(fs.readFileSync('firstpayment.log'));

payment = provider.validPayment(payment);
console.log(payment.toString());

var explorer = new btcLib.transport.explorers.Explorer();

explorer.broadcast(payment.toString(), function(err, txid) {
  if (err) {
    console.log('Error broadcasting');
  } else {
    console.log('broadcasted as', txid);
  }
});
