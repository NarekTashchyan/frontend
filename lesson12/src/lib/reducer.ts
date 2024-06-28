import { ActionTypes, IAction, IState, ItoDo } from "./types";

export const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionTypes.setTodos:
            return {
                ...state,
                todos: action.payload as ItoDo[]
            };
        case ActionTypes.addTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload as ItoDo]
            };
        case ActionTypes.removeTodo:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case ActionTypes.toggleTodo:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
};
