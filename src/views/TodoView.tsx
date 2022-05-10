import { TodoComponent, TodoForm } from '../components';
import React from 'react';
import styled from 'styled-components';
import { useTodos } from '../context/todo/';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TodoView: React.FC = () => {
  const { todos } = useTodos();
  return (
    <Container>
      {todos.map((todo) => (
        <TodoComponent {...todo} />
      ))}
      <TodoForm />
    </Container>
  );
};
