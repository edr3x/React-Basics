export function UserPropsDemo(props: {
    name: string;
    age: number;
    email: string;
}) {
    return (
        <div>
            <h1>name {props.name}</h1>
            <h1>age {props.age}</h1>
            <h1>email {props.email}</h1>
        </div>
    );
}
