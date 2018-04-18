
# isTruthy

JavaScript function used to determine if a given value is "truthy" (useful for testing env vars).

Install

```
[~] yarn add @tobius/istruthy
```

Usage

```
const isTruthy = require('isTruthy');

[true, 'true', 'True', 1, '1', 1.0, '1.0', 'on', 'active'].forEach((truth) => {
	console.log(truth); // true
});

[false, 'hello', 0, 1.1, -1, 'Will you marry me?'].forEach((false) => {
	console.log(truth); // false
});
```

__License__

[MIT](https://github.com/tobius/istruthy/blob/master/LICENSE)

