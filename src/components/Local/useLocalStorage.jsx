import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
    const [text, setText] = useState(localStorage.getItem(key) !== null ? localStorage.getItem(key) : '')

    useEffect(() => {
        localStorage.setItem(key, text)
    }, [key, text])

    return [text, setText];
}

export default useLocalStorage;