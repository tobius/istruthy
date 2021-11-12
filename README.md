# isTruthy

Determine if a given value is "truthy".

## Install

```sh
[~] npm i @tobius/istruthy
```

## Usage

```js
const isTruthy = require('isTruthy');

[true, 'true', 'True', 1, '1', 1.0, '1.0', 'on', 'active'].forEach((truth) => {
	console.log(isTruthy(truth)); // true
});

[false, 'hello', 0, 1.1, -1, 'Will you marry me?'].forEach((truth) => {
	console.log(isTruthy(truth)); // false
});
```

_Note: See unit test (`npm run test`) for all use cases._

## License

This software library is licensed under the [MIT License](https://github.com/tobius/istruthy/blob/master/LICENSE).
