'use strict';

var inherits = require('inherits');

var $ = require('@owstack/btc-lib').util.preconditions;

var Script = require('@owstack/btc-lib').Script;
var Transaction = require('@owstack/btc-lib').Transaction;
var _ = require('@owstack/btc-lib').deps._;


/**
 * A commitment transaction (also referred to as Lock transaction).
 *
 * @constructor
 * @param {Object} opts
 * @param {Array.<string>} opts.publicKeys
 * @param {string|btc.Network} opts.network - livenet by default
 */
function Commitment(opts) {
  $.checkArgument(opts.publicKeys && opts.publicKeys.length === 2, 'Must provide exactly two public keys');
  Transaction.call(this, opts.transaction);

  this.network = opts.network || 'livenet';
  this.publicKeys = opts.publicKeys;
  this.outscript = Script.buildMultisigOut(this.publicKeys, 2);
  this.address = this.outscript.toScriptHashOut().toAddress();
  if (!this.outputs.length) {
    this.change(this.address);
  }

  Object.defineProperty(this, 'amount', {
    configurable: false,
    get: function() {
      return this.inputAmount;
    }
  });
}
inherits(Commitment, Transaction);

Commitment.prototype.toObject = function() {
  var transaction = Transaction.prototype.toObject.apply(this);
  return {
    transaction: transaction,
    publicKeys: _.map(this.publicKeys, function(publicKey) {
      return publicKey.toString();
    }),
    network: this.network.toString(),
  };
};

/**
 * @return {btc.Address}
 */
Commitment.prototype.getAddress = function() {
  return this.address;
};

module.exports = Commitment;
