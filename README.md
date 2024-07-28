# bsr-tabs

> ReactJS component tabs

[![NPM](https://img.shields.io/npm/v/bsr-tabs.svg)](https://www.npmjs.com/package/bsr-tabs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bsr-tabs
```

## Usage

```tsx
import React from "react";
import {Tab, Tabs} from "bsr-tabs"
import 'bsr-tabs/dist/index.css'

export default function App() {
    return (
        <Tabs style={{width:'50%'}}>
            <Tab title={'tab1'} select={true}>
                <div>Tab1</div>
            </Tab>
            <Tab title={'tab2'}>
                <div>Tab2</div>
            </Tab>
        </Tabs>
    )
}
```

## License

MIT © [ionson100](https://github.com/ionson100)

[Props, Function](https://ionson100.github.io/wwwroot/index.html#page=tabs).

[Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#page=8-20).
