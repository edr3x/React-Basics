export function UserList() {
    const users = [
        { name: "John", age: 20 },
        { name: "Jane", age: 21 },
        { name: "Jack", age: 22 },
    ];

    return (
        <div>
            {users.map((value, index) => (
                <div key={index}>
                    {value.name}: {value.age}
                </div>
            ))}
        </div>
    );
}
