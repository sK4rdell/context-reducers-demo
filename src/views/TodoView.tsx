import { TodoComponent } from '../components/TodoComponent';
import React from 'react';
import styled from 'styled-components';
import { useTodos } from '../context/todo/context';
import { TodoForm } from '../components/TodoForm';

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
