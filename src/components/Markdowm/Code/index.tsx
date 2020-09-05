import React, { useEffect } from "react";
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';

import "./index.less"
import {Typography} from "antd";

interface ICodeProps {
    value: string
}
export const CodeBlock: React.FC<ICodeProps> = (props) => {
    let codeEl: HTMLElement
    const setRef = (html: HTMLElement) => {
        codeEl = html
    }
    const setHighlight = (str: HTMLElement) => {
        return hljs.highlightBlock(str)
    }
    useEffect(() => {
        setHighlight(codeEl)
    }, [props.value])
    return (
        <pre className="code-block">
            <Typography.Paragraph
                className="copy-icon"
                copyable={{text: props.value}}
            />
            <code ref={setRef}>{props.value}</code>
        </pre>
    )
}

export const CodeTable: React.FC<ICodeProps> = (props) => {
    return (
        <table className="code-table">
            {props.children}
        </table>
    )
}

export const CodeInline: React.FC<ICodeProps> = (props) => {
    return <Typography.Text keyboard>{props.value}</Typography.Text>
}
