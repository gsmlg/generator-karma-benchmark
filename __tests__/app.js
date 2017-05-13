'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-karma-benchmark:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      'karma.conf.js',
      'ReadMe',
      // 'vendor',
      'benchmark/each.benchmark.js'
    ]);
  });
});
