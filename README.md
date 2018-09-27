To update snapshot
```jest --updateSnapshot```

To run manually 
```./node_modules/@tradeshift/v4/bin/v4.js test```

To mock api
```
import * as unexpectedWrapper from 'unexpected';
import * as unexpectedExpress from 'unexpected-express';
import routes from './routes';

const mock = unexpectedWrapper.clone().installPlugin(unexpectedExpress);

return mock(routes, 'to yield exchange', {
    request: '/url',
    response: {
        statusCode: 200
    }
});

```
