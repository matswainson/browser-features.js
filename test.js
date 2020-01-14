var assert = require('assert');
const browserFeatures = require('./');

describe('browserFeatures', function() {
it('browserFeatures.css.transform === false', function() {
    assert.equal(browserFeatures.css.transform, false);
  });
});