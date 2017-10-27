'use strict';

var spec = {
  name: 'Channel',
  message: 'Internal Error on btc-channels Module {0}',
};

module.exports = require('@owstack/btc-lib').errors.extend(spec);
