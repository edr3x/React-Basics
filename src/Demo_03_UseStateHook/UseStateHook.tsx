import { useState } from "react";

export function UseStateHookComponent() {
    // INFO: example 1

    // const [age, ageState] = useState(0);
    // function increaseAge() {
    //     ageState(age + 1);
    // }

    // INFO: example 2

    /*
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return (
        <>
            <input type="text" onChange={handleInputChange} autoFocus={true} />
            <br />
            <div>{inputValue}</div>
        </>
    );
    */

    // INFO: example 3

    /*
    const [showText, setShowText] = useState(true);
    const [textColor, setTextColor] = useState("blue");

    return (
        <>
            <button onClick={() => setShowText(!showText)}> Shot/Hide</button>
            <button
                onClick={() =>
                    setTextColor(textColor === "blue" ? "red" : "blue")
                }
            >
                Change Color
            </button>
            {showText && (
                <h1 style={{ color: textColor }}> Hi my name is Obi wan </h1>
            )}
        </>
    );
    */

    // INFO: Counter app

    const [counter, setCounter] = useState(0);

    const increaseCounter = () => setCounter(counter + 1);
    const decreaseConter = () => setCounter(counter - 1);
    const resetCounter = () => setCounter(0);

    return (
        <>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseConter}>Decrease</button>
            <button onClick={resetCounter}>Reset</button>

            {counter}
        </>
    );
}
