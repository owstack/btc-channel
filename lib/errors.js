'use strict';

var spec = {
  name: 'Channel',
  message: 'Internal Error on btccore-channels Module {0}',
};

module.exports = require('btccore-lib').errors.extend(spec);
