
# isTruthy

JavaScript function used to determine if a given value is "truthy" (useful for env vars).

__Test__

```
[~] yarn && yarn test
[~] vi test/index.js
```

__Use__

```
const isTruthy = require('isTruthy');
console.log(isTruthy(somethingTruthy) ? 'true' : 'false');
```

Supported truths are:

```
true
'true'
1
'1'
1.0
'1.0'
'on'
'active'
```

__License__

MIT

