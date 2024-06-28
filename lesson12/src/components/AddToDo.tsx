import { useContext, useState } from "react";
import { ToDoContext } from "../lib/context";
import { ActionTypes } from "../lib/types";
import { add } from "../lib/api";

export const AddToDo:React.FC = () => {
    const context = useContext(ToDoContext)
    if (!context){
        throw new Error("No context")
    }
    const [text, setText] = useState('')
    const {dispatch} = context
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        add({text, completed:false})
        .then(res => {
            dispatch({type:ActionTypes.addTodo, payload:res})
            setText("")
        })
    }
    return <form onSubmit={handleSubmit}>
    <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
    />
    <button>save</button>
    </form>
}