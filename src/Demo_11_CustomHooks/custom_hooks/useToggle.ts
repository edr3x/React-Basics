import { useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
    const [state, setState] = useState<boolean>(initialValue);

    const toggle = () => {
        setState((val) => !val);
    };

    return [state, toggle] as const;
};
