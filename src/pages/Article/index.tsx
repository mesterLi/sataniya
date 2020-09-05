import React, { useState } from "react";
import { Button, Input } from "antd";

import usePaste from "@/hooks/usePaste"
import Markdown from "@/components/Markdowm";
import "./index.less";

const initValue = `
# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a1fbd24846240c6b248e461a218799e~tplv-k3u1fbpfcp-zoom-1.image)

\` 关键词 \`

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`
const Article: React.FC<{}> = () => {
    const [initVal, setVal] = useState(initValue)
    const [title, setTitle] = useState('');
   const file = usePaste();
   console.log(file)
    return (
        <div className="md-container">
            <div className="md-container__header">
                <div>
                    <Input
                        placeholder="请输入标题"
                        value={title}
                        onChange={(evt) => {
                            setTitle(evt.target.value)
                        }}
                    />
                </div>
                <div>
                    <Button type="primary">发布</Button>
                </div>
            </div>
            <Markdown
                onChange={(tem: string) => {
                    setVal(tem);
                }}
                value={initVal}/>
            <div className='md-container__footer'>
                <Button style={{flex: 0}}>提交</Button>
            </div>
        </div>
    )
}

export default Article
