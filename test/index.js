// import
const assert = require('assert');
const isTruthy = require('../index');

// config
const check = '\u2714';
const green = '\x1b[32m';
const grey = '\x1b[39m';
const indent = '  ';
const red = '\x1b[31m';
const reset = '\x1b[0m';
const white = '\x1b[37m';
const x = '\u2718';

// score
let pass = 0;
let fail = 0;

// test
console.log(`\n${indent}${white}isTruthy`);

try {
  assert.strictEqual(true, isTruthy(true));
  assert.strictEqual(true, isTruthy('true'));
  assert.strictEqual(false, isTruthy(false));
  assert.strictEqual(false, isTruthy('false'));
  console.log(`${indent}${indent}${green}${check} ${grey}should understand booleans`);
  pass++;
} catch(err) {
  console.log(`${indent}${indent}${red}${x} ${grey}should understand booleans`);
  console.error(err);
  fail++;
}

try {
  assert.strictEqual(false, isTruthy(-100));
  assert.strictEqual(false, isTruthy('-100'));
  assert.strictEqual(false, isTruthy(-1));
  assert.strictEqual(false, isTruthy('-1'));
  assert.strictEqual(false, isTruthy(0));
  assert.strictEqual(false, isTruthy('0'));
  assert.strictEqual(true, isTruthy(1));
  assert.strictEqual(true, isTruthy('1'));
  assert.strictEqual(false, isTruthy(100));
  assert.strictEqual(false, isTruthy('100'));
  console.log(`${indent}${indent}${green}${check} ${grey}should understand integers`);
  pass++;
} catch(err) {
  console.log(`${indent}${indent}${red}${x} ${grey}should understand integers`);
  console.error(err);
  fail++;
}

try {
  assert.strictEqual(false, isTruthy(-100.5));
  assert.strictEqual(false, isTruthy('-100.5'));
  assert.strictEqual(false, isTruthy(-1.5));
  assert.strictEqual(false, isTruthy('-1.5'));
  assert.strictEqual(false, isTruthy(0.0));
  assert.strictEqual(false, isTruthy('0.0'));
  assert.strictEqual(true, isTruthy(1.0));
  assert.strictEqual(true, isTruthy('1.0'));
  assert.strictEqual(false, isTruthy(1.5));
  assert.strictEqual(false, isTruthy('1.5'));
  assert.strictEqual(false, isTruthy(100.5));
  assert.strictEqual(false, isTruthy('100.5'));
  console.log(`${indent}${indent}${green}${check} ${grey}should understand floats`);
  pass++;
} catch(err) {
  console.log(`${indent}${indent}${red}${x} ${grey}should understand floats`);
  console.error(err);
  fail++;
}

try {
  assert.strictEqual(false, isTruthy(null));
  assert.strictEqual(false, isTruthy('null'));
  console.log(`${indent}${indent}${green}${check} ${grey}should understand null`);
  pass++;
} catch(err) {
  console.log(`${indent}${indent}${red}${x} ${grey}should understand null`);
  console.error(err);
  fail++;
}

try {
  assert.strictEqual(false, isTruthy(undefined));
  assert.strictEqual(false, isTruthy('undefined'));
  console.log(`${indent}${indent}${green}${check} ${grey}should understand undefined`);
  pass++;
} catch(err) {
  console.log(`${indent}${indent}${red}${x} ${grey}should understand undefined`);
  console.error(err);
  fail++;
}

try {
  assert.strictEqual(false, isTruthy(NaN));
  assert.strictEqual(false, isTruthy('NaN'));
  console.log(`${indent}${indent}${green}${check} ${grey}should understand NaN`);
  pass++;
} catch(err) {
  console.log(`${indent}${indent}${red}${x} ${grey}should understand NaN`);
  console.error(err);
  fail++;
}

try {
  assert.strictEqual(false, isTruthy(Infinity));
  assert.strictEqual(false, isTruthy('Infinity'));
  console.log(`${indent}${indent}${green}${check} ${grey}should understand Infinity`);
  pass++;
} catch(err) {
  console.log(`${indent}${indent}${red}${x} ${grey}should understand Infinity`);
  console.error(err);
  fail++;
}

try {
  assert.strictEqual(true, isTruthy('on'));
  assert.strictEqual(true, isTruthy('active'));
  assert.strictEqual(false, isTruthy('off'));
  assert.strictEqual(false, isTruthy('inactive'));
  console.log(`${indent}${indent}${green}${check} ${grey}should understand "human truthy" strings`);
  pass++;
} catch(err) {
  console.log(`${indent}${indent}${red}${x} ${grey}should understand "human truthy" strings`);
  console.error(err);
  fail++;
}

// summary
console.log('');
if (pass > 0) {
  console.log(`${indent}${green}${pass} passing`);
}
if (fail > 0) {
  console.log(`${indent}${red}${fail} failing`);
}
console.log('');

// exit code
process.exit(fail > 0 ? 1 : 0);
