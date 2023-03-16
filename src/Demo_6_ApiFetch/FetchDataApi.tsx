import { useEffect, useState } from "react";

import axios from "axios";

export function FetchDataFromAPI() {
    //myth: example one
    /*
    const [catFact, setCatFact] = useState("");

    function fetchCatFact() {
        axios
            .get("https://catfact.ninja/fact")
            .then((res) => setCatFact(res.data.fact));
    }
    useEffect(() => {
        fetchCatFact();
    }, []);

    return (
        <div>
            <button onClick={fetchCatFact}>Generate Cat Fact</button>
            <p>Fact: {catFact} </p>
        </div>
    );
    */

    //myth: example two

    type Predection = {
        name: string;
        age: number;
        count: number;
    };

    const [name, setName] = useState<string>("");

    const [predection, setPredection] = useState<Predection>({
        name: "",
        age: 0,
        count: 0,
    });

    function fetchAgeData(name: string) {
        axios
            .get(`https://api.agify.io/?name=${name}`)
            .then((res) => setPredection(res.data));
    }

    return (
        <div>
            <input
                placeholder="Ex. Obi wan ..."
                onChange={(event) => setName(event.target.value)}
            />

            <button onClick={() => fetchAgeData(name)}>Predect Age</button>

            <h1>Name: {predection?.name}</h1>
            <h1>Age: {predection?.age}</h1>
            <h1>Age: {predection?.count}</h1>
        </div>
    );
}
