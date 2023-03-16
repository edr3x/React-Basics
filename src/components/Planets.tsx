export function Planets() {
    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Saturn", isGasPlanet: true },
        { name: "Earth", isGasPlanet: false },
        { name: "Venus", isGasPlanet: false },
        { name: "Uranus", isGasPlanet: true },
        { name: "Neptune", isGasPlanet: false },
    ];

    return (
        <div>
            {planets.map(
                (value) => !value.isGasPlanet && <div>{value.name}</div>,
                // INFO: The `&&` operator is used to conditionally render a component.
            )}
        </div>
    );
}
