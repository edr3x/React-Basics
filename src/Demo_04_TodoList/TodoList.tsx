import { useState } from "react";

type TodoList = {
    id: number;
    name: string;
    isCompleted: boolean;
};

type TodoListItemsProps = {
    task: TodoList;
    taskComplete: (taskId: number) => void;
    taskUpdate: (taskId: number) => void;
    deleteTask: (taskId: number) => void;
};

function TodoListItems(props: TodoListItemsProps) {
    const { task, taskComplete, taskUpdate, deleteTask } = props;
    return (
        <div>
            <h1>
                {task.isCompleted ? (
                    <span
                        style={{
                            textDecoration: "line-through",
                            color: "green",
                        }}
                    >
                        {task.name}
                    </span>
                ) : (
                    <span>{task.name}</span>
                )}
            </h1>
            <button onClick={() => taskUpdate(task.id)}>Update</button>
            <button onClick={() => taskComplete(task.id)}>Completed</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export function TodoListComponent() {
    const [todo, setTodo] = useState<string>("");

    const [todoList, setTodoList] = useState<TodoList[]>([]);
    const [isUpdating, setUpdating] = useState<boolean>(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTodo(event.target.value);
    }

    function addTask() {
        const newTodoList = [
            ...todoList,
            {
                id:
                    todoList.length === 0
                        ? 1
                        : todoList[todoList.length - 1].id + 1,
                name: todo,
                isCompleted: false,
            },
        ];
        setTodoList(newTodoList);
        setUpdating(false);
        setTodo("");
    }

    function deleteTask(taskId: number) {
        setTodoList(todoList.filter((task) => task.id !== taskId));
    }

    function taskComplete(taskId: number) {
        setTodoList(
            todoList.map((task) =>
                task.id === taskId ? { ...task, isCompleted: true } : task,
            ),
        );
    }

    function taskUpdate(taskId: number) {
        setUpdating(true);

        const task = todoList.find((task) => task.id === taskId);

        if (!task) return;

        setTodo(task.name);

        setTodoList(todoList.filter((task) => task.id !== taskId));
    }

    return (
        <div className="maintodo">
            <div className="addTask">
                <input onChange={handleChange} autoFocus={true} value={todo} />
                <button onClick={addTask}>
                    {isUpdating ? "update" : "add"}
                </button>
            </div>
            <div className="list">
                {todoList.map((task) => (
                    <TodoListItems
                        task={task}
                        taskUpdate={taskUpdate}
                        taskComplete={taskComplete}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
}
