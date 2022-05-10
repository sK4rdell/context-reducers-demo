import React, { ChangeEvent, useState } from 'react';
import { useTodos } from '../context/todo';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


const Container = styled.div`
  display: flex;
  button {
    margin-left: 1rem;
  }
`;

export const TodoForm: React.FC = () => {
  const [state, setState] = useState('');
  const { dispatch } = useTodos();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };

  const handleSubmit = (): void => {
    dispatch({ type: 'ADD', payload: { task: state, completed: false, id: uuidv4() } });
    setState('');
  };

  return (
    <Container>
      <input type="text" value={state} onChange={onInputChange} />
      <button disabled={!state} onClick={handleSubmit}>
        Add
      </button>
    </Container>
  );
};
