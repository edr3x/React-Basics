import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function HomePage() {
    const { data, isLoading, error, refetch } = useQuery(["cat"], async () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (error) {
        return <h1>ERROR Error occured ..</h1>;
    }

    if (isLoading) {
        return <h1>LOADING...</h1>;
    }

    return (
        <h1>
            THIS IS THE HOME PAGE<p>{data?.fact}</p>
            <button onClick={() => refetch()}>Update data</button>
        </h1>
    );
}
