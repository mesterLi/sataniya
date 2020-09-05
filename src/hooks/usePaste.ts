import { useEffect, useState } from "react";

export default function usePaste() {
    const [file, setFile] = useState(null as unknown);
    const listener = (e: ClipboardEventInit) => {
        const item = e.clipboardData?.items[0];
        if (item) {
            setFile(item.getAsFile())
        }
    }
    useEffect(() => {
        window.addEventListener('paste', listener);
        return () => {
            window.removeEventListener('paste', listener)
        }
    })
    return file || null;
}
