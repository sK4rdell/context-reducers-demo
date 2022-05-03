import {TodoAction} from "./action";
import {Todo} from "../../typings";

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "TOGGLE":
            return [
                ...state.filter((todo) => todo.id !== action.payload.id),
                ...state.filter((todo) => todo.id === action.payload.id)
                    .map((todo) => ({
                            ...todo,
                            completed: !todo.completed
                        })
                    )];
        case "DELETE":
            return [...state.filter((todo) => todo.id !== action.payload.id)];
        default:
            return state;
    }
}