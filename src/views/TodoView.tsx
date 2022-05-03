import {Todo} from "../typings";
import {TodoComponent} from "../components/TodoComponent";
import React from "react";
import styled from "styled-components";
import {Button} from "../components/Button";
import {useTodos} from "../context/todo/TodoContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TodoView: React.FC = () => {
    const {todos, dispatch} = useTodos();
    return (
        <Container>
            {todos.map((todo) => <TodoComponent {...todo} />)}
            <Button>Add</Button>
        </Container>
    )
}