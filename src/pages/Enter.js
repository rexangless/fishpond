import { useState, useEffect } from "react";

function HandleSubmit() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [useFeed, setUseFeed] = useState("Fish Pond");

    useEffect(() => {
        submitInfo(() => {
            setUseFeed((useFeed) === "Fi$Pond");
        }, Enter);
    });

    return (
        <>
            <h1>Enter {useFeed} </h1>
            <button type="button" onClick={() => setUseFeed("Fi$Pond")}> Enter </button>
            <input/>
        </>
    )
};

const Enter = () => {
    return (
    <>
    
    </>
    );
};

export default HandleSubmit;