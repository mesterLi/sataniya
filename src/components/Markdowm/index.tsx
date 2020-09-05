import React from "react";
import ReactMarkdown from "react-markdown";
import toc from "remark-toc"


import Editor from "./Editor";
import { CodeBlock, CodeTable, CodeInline } from "./Code";

import "./index.less"

export interface IMarkdownProps {
    value: string
    onChange?: (tem: string) => void
}

const Markdown: React.FC<IMarkdownProps> = (props) => {
    const editorChange = (tem: string) => {
        if (props.onChange) {
            props.onChange(tem);
        }
    }
    return (
        <div className="markdown-container">
            <Editor
                value={props.value}
                mode="markdown"
                theme="monokai"
                onChange={editorChange}
            />
            <ReactMarkdown
                className="markdown-container__review"
                source={props.value}
                escapeHtml
                renderers={{
                    code: CodeBlock,
                    table: CodeTable,
                    inlineCode: CodeInline
                }}
                plugins={[toc]}
            />
        </div>
    )
}

export default Markdown;
