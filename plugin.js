/*!
 * plugin.js - plugin for bcoin
 */

'use strict';

const assert = require('assert');
const EventEmitter = require('events');
const txUtils = require('./tx');

/**
 * @exports plugin
 */

const plugin = exports;

/**
 * Plugin
 * @extends EventEmitter
 */

class Plugin extends EventEmitter {
  /**
   * Create a plugin.
   * @constructor
   * @param {Node} node
   */

  constructor(node) {
    super();

    this.node = node;
    this.config = node.config;
    this.network = node.network;
    this.logger = node.logger;

    this.init();
  }

  init() {
    this.node.on('tx', txUtils.logTX)
  }

  async open() {
    this.logger.info('TX logger is loaded.')
  }

  async close() {
    this.logger.info('TX logger stopped.');
  }
}

/**
 * Plugin name.
 * @const {String}
 */

plugin.id = 'bplugin-demo';

/**
 * Plugin initialization.
 * @param {Node} node
 * @returns {WalletDB}
 */

plugin.init = function init(node) {
  return new Plugin(node);
};

