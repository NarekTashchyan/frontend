import { remove, completed, reset } from "../lib/api";
import { ItoDo } from "../lib/types";
import { ActionTypes } from "../lib/types";
import { useContext } from "react";
import { ToDoContext } from "../lib/context";

interface Props {
    todo: ItoDo;
}

export const ToDoItem: React.FC<Props> = ({ todo }) => {
    const context = useContext(ToDoContext);
    if (!context) {
        throw new Error("no context");
    }
    const { state } = context
    const { dispatch } = context;
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        remove(todo.id).then(res => {
            dispatch({ type: ActionTypes.removeTodo, payload: res });
        });
        state.todos = state.todos.filter(item => item.id !== todo.id)
    };
    const toggleToDo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        if (!todo.completed) {
            completed(todo.id).then(res => {
                dispatch({ type: ActionTypes.toggleTodo, payload: res });
                state.todos = state.todos.map(item => 
                    item.id === todo.id ? { ...item, completed: true } : item
                );
            });
        } else {
            reset(todo.id).then(res => {
                dispatch({ type: ActionTypes.toggleTodo, payload: res });
                state.todos = state.todos.map(item => 
                    item.id === todo.id ? { ...item, completed: false } : item
                );
            });
        }
    };

    return (
        <div className={todo.completed ? 'completed' : 'item'}>
            <p>{todo.text}</p>
            <div>
                <button onClick={toggleToDo}>{todo.completed ? 'reset' : 'completed'}</button>
                <button onClick={handleRemove}>delete</button>
            </div>
        </div>
    );
};
