
# isTruthy

JavaScript function used to determine if a given value is "truthy" (useful for testing env vars).

Install

```sh
[~] yarn add @tobius/istruthy
```

Usage

```js
const isTruthy = require('isTruthy');

[true, 'true', 'True', 1, '1', 1.0, '1.0', 'on', 'active'].forEach((truth) => {
	console.log(isTruthy(truth)); // true
});

[false, 'hello', 0, 1.1, -1, 'Will you marry me?'].forEach((truth) => {
	console.log(isTruthy(truth)); // false
});
```

__License__

[MIT](https://github.com/tobius/istruthy/blob/master/LICENSE)

