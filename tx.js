/*!
 * tx.js - tx methods
 */

'use strict';

const assert = require('assert');
const TX = require('bcoin/lib/primitives/tx');

exports.logTX = (tx) => {
  assert(TX.isTX(tx), 'tx must be a TX.');

  // let's log tx
  console.log(tx.toJSON());
};
