import React, { useRef, useEffect } from "react";
import Mirror, { EditorFromTextArea } from "codemirror";
import "codemirror/lib/codemirror.css"
import "./theme-monokai.css"

export interface IEditorProps {
    mode: string
    theme: string
    value: string
    onChange?: (tem: string) => void
    textAreaClassName?: string
}

const Editor: React.FC<IEditorProps> = (props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    let editor: EditorFromTextArea;
    const editorChange = () => {
        if (props.onChange) {
            props.onChange(editor.getValue());
        }
    }
    useEffect(() => {
        editor = Mirror.fromTextArea(textareaRef.current as HTMLTextAreaElement, {
            mode: props.mode,
            theme: props.theme
        })
        editor.on('change', editorChange)
    }, [])
    return (
        <div>
            <textarea
                ref={textareaRef}
                value={props.value}
                onChange={() => {}}
                className={props.textAreaClassName}
            />
        </div>
    )
}

export default Editor;
