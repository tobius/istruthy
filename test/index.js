// import
const chai = require('chai');
const isTruthy = require('../index');

// enable stack traces
chai.config.includeStack = true;

// use chai assert
const { assert } = chai;

// test
describe('isTruthy', () => {

  it('should understand booleans', () => {
    assert.ok(isTruthy(true));
    assert.ok(isTruthy('true'));
    assert.notOk(isTruthy(false));
    assert.notOk(isTruthy('false'));
  });

  it('should understand integers', () => {
    assert.notOk(isTruthy(-100));
    assert.notOk(isTruthy('-100'));
    assert.notOk(isTruthy(-1));
    assert.notOk(isTruthy('-1'));
    assert.notOk(isTruthy(0));
    assert.notOk(isTruthy('0'));
    assert.ok(isTruthy(1));
    assert.ok(isTruthy('1'));
    assert.notOk(isTruthy(100));
    assert.notOk(isTruthy('100'));
  });

  it('should understand floats', () => {
    assert.notOk(isTruthy(-100.5));
    assert.notOk(isTruthy('-100.5'));
    assert.notOk(isTruthy(-1.5));
    assert.notOk(isTruthy('-1.5'));
    assert.notOk(isTruthy(0.0));
    assert.notOk(isTruthy('0.0'));
    assert.ok(isTruthy(1.0));
    assert.ok(isTruthy('1.0'));
    assert.notOk(isTruthy(1.5));
    assert.notOk(isTruthy('1.5'));
    assert.notOk(isTruthy(100.5));
    assert.notOk(isTruthy('100.5'));
  });

  it('should understand null', () => {
    assert.notOk(isTruthy(null));
    assert.notOk(isTruthy('null'));
  });

  it('should understand undefined', () => {
    assert.notOk(isTruthy(undefined));
    assert.notOk(isTruthy('undefined'));
  });

  it('should understand NaN', () => {
    assert.notOk(isTruthy(NaN));
    assert.notOk(isTruthy('NaN'));
  });

  it('should understand Infinity', () => {
    assert.notOk(isTruthy(Infinity));
    assert.notOk(isTruthy('Infinity'));
  });

  it('should understand "human truthy" strings', () => {
    assert.ok(isTruthy('on'));
    assert.ok(isTruthy('active'));
    assert.notOk(isTruthy('off'));
    assert.notOk(isTruthy('inactive'));
  });
});
