import {Todo, Action} from "../../typings";

export type TodoAction = Action<'ADD', Todo> | Action<'DELETE', { id: string }> | Action<'TOGGLE', { id: string }>;