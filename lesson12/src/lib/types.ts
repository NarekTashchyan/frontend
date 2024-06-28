import { Dispatch } from "react";
export interface ItoDo{
    id: string;
    text: string;
    completed: boolean;
}

export enum Filters{
    all,
    active,
    completed,
}


export enum ActionTypes{
    setTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    setFilter,
    updataTodo
}


export interface IState{
    todos:ItoDo[]
    currentFilter: Filters
}


export interface IAction{
    type: ActionTypes
    payload: unknown
}

export interface IContextType{
    state: IState
    dispatch: Dispatch<IAction>
}