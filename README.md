## Example

We have several examples on the documentation. Here is the first one to get you started:
```javascript
// app.js

import React, { Component } from 'react';

//import using commonJS Module *Require Plugins
//import { Button } from 'react-weui'

//import Using ES6 syntax
import WeUI from 'weui-react';

//import styles
import 'weui';

const {Button} = WeUI;

class App extends Component {
    render() {
        return (
            <Button>hello wechat</Button>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```
