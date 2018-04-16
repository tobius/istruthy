
# isTruthy

Determine if a given value is "truthy"

> I've done this so many times to work with environment variable configurations that are out of my control I thought it was time to add a little `yarn add istruthy` to my life. Enjoy!
> <cite>[Tobius](http://tobius.co)</cite>

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

