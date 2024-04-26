import { useEffect, useState } from "react";

const useFetchReducer = (link) => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((json) => setInfo(json));
    }, [link]);

    return [info];
}

export default useFetchReducer;