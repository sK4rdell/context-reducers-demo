import React from 'react';
import { Todo } from '../typings';
import styled from 'styled-components';
import { useTodos } from '../context/todo';

interface Props {
  done: boolean;
}

const TodoContainer = styled.div`
  background: ${(props: Props) => (props.done ? '#eaeaea' : '#ffffff')};
  border: 2px solid #000000;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoComponent: React.FC<Todo> = ({ task, completed, id }) => {
  const { dispatch } = useTodos();

  const handleCheckBoxClicked = (): void => {
    dispatch({ type: 'TOGGLE', payload: { id } });
  };

  const handleDeleteClicked = (): void => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  return (
    <TodoContainer done={completed}>
      <p>{task}</p>
      <div>
        <button onClick={handleDeleteClicked}>Delete</button>
        <input type="checkbox" checked={completed} onChange={handleCheckBoxClicked} />
      </div>
    </TodoContainer>
  );
};
