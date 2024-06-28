import { ItoDo } from "./types";
import axios from "axios";
type inputTodo = Omit <ItoDo,'id'>
export const getAll = async ():Promise<ItoDo[]> => {
    const response = await axios.get('http://localhost:3004/todos');
    return response.data;
}

export const add = async (obj:inputTodo):Promise<ItoDo> => {
    const response = await axios.post('http://localhost:3004/todos', obj);
    return response.data;
}

export const remove = async (id:string):Promise<ItoDo> => {
    const response = await axios.delete(`http://localhost:3004/todos/${id}`);
    return response.data;
}

export const completed = async (id:string):Promise<ItoDo> => {
    const response = await axios.patch(`http://localhost:3004/todos/${id}`, {
        completed: true
        });
        return response.data;
}

export const reset = async (id:string):Promise<ItoDo> => {
    const response = await axios.patch(`http://localhost:3004/todos/${id}`, {
        completed: false
        });
        return response.data;
}