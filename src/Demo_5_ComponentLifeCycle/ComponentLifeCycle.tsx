// info: stages in react life cycle
// 1. Mounting -> when component is first rendered
// 2. Updating -> when component is updated
// 3. Unmounting -> when component is removed from DOM

import { useState, useEffect } from "react";

function Text() {
    const [text, setText] = useState("");

    useEffect(() => {
        //info: runs when component is first rendered
        console.log("component mounted");

        return () => {
            //info: runs when component is removed from DOM
            console.log("component unmounted");
        };
    }, []);
    // info: empty array means run only once
    // we an clso put `[text]` in array to run when `text` state changes

    return (
        <div>
            <input onChange={(event) => setText(event.target.value)} />

            <p>{text}</p>
        </div>
    );
}

export function ComponentLifeCycleDemo() {
    const [showText, setShowText] = useState(false);

    return (
        <div className="maintodo">
            <button onClick={() => setShowText(!showText)}>
                Show Text Box
            </button>

            {showText && <Text />}
        </div>
    );
}
