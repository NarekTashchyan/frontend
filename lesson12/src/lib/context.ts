import { createContext } from "react";
import { IContextType } from "./types";

export const ToDoContext = createContext<IContextType|undefined>(undefined)