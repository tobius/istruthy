# isTruthy

Determine if a given value is "truthy" (likely to represent boolean true).

### Install

```sh
[~] npm i @tobius/istruthy
```

_Supported by [Node.js](https://nodejs.org/) version 4, 6, 8, 10, 12, 14, and 16._

### Usage

```js
const isTruthy = require('isTruthy');

// true
console.log([
  isTruthy('1'),
  isTruthy('1.0'),
  isTruthy('active'),
  isTruthy('on'),
  isTruthy('true'),
  isTruthy(1),
  isTruthy(1.0),
  isTruthy(true),
]);

// false
console.log([
  isTruthy('-1'),
  isTruthy('-1.5'),
  isTruthy('-100'),
  isTruthy('-100.5'),
  isTruthy('0'),
  isTruthy('0.0'),
  isTruthy('1.5'),
  isTruthy('100'),
  isTruthy('100.5'),
  isTruthy('Infinity'),
  isTruthy('NaN'),
  isTruthy('false'),
  isTruthy('inactive'),
  isTruthy('null'),
  isTruthy('off'),
  isTruthy('undefined'),
  isTruthy(-1),
  isTruthy(-1.5),
  isTruthy(-100),
  isTruthy(-100.5),
  isTruthy(0),
  isTruthy(0.0),
  isTruthy(1.5),
  isTruthy(100),
  isTruthy(100.5),
  isTruthy(Infinity),
  isTruthy(NaN),
  isTruthy(false),
  isTruthy(null),
  isTruthy(undefined),
]);
```

### License

This software library is licensed under the [MIT License](https://github.com/tobius/istruthy/blob/master/LICENSE).
