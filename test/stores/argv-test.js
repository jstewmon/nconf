/*
 * argv-test.js: Tests for the nconf argv store.
 *
 * (C) 2011, Charlie Robbins
 *
 */

var vows = require('vows'),
    assert = require('assert'),
    helpers = require('../helpers'),
    nconf = require('../../lib/nconf');

vows.describe('nconf/stores/argv').addBatch({
  "An instance of nconf.stores.Argv": {
    topic: new nconf.stores.Argv(),
    "should have the correct methods defined": function (argv) {
      assert.isFunction(argv.loadSync);
      assert.isFunction(argv.loadArgv);
      assert.isFalse(argv.options);
    }
  }
}).export(module);