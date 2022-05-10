import React, { useContext, useReducer } from 'react';
import { Todo } from '../../typings';
import { TodoAction } from './action';
import { todoReducer } from './reducer';


interface TodoContextI {
  todos: Todo[];
  dispatch: (arg: TodoAction) => void;
}

const initialContext: TodoContextI = {
  todos: [],
  dispatch: () => console.error('Context not initialized')
};

const TodoContext = React.createContext<TodoContextI>(initialContext);

interface Props {
  children?: React.ReactNode;
}

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialContext.todos);

  return <TodoContext.Provider value={{ todos: state, dispatch }}>{children}</TodoContext.Provider>;
};

export const useTodos = () => useContext(TodoContext);
