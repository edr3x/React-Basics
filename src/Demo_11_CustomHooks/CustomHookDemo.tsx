import { useToggle } from "./custom_hooks/useToggle";

export function CustomHooksDemo() {
    const [isVisible, toggle] = useToggle(false);

    return (
        <div>
            <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <h1>Some Hidden text</h1>}
        </div>
    );
}
