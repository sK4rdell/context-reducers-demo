import React from "react";
import {Todo} from "../typings";
import styled from "styled-components";

const TodoContainer = styled.div`
    background: #ffffff;
    border: 4px solid #000000;
    padding: 2rem;
    margin-top: 1rem;
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input[type="checkbox"]  {
        height: 3rem;
    }
`;

export const TodoComponent: React.FC<Todo> = ({task}) => (
    <TodoContainer>
        <h1>{task}</h1>
        <input type="checkbox" checked/>
    </TodoContainer>
)