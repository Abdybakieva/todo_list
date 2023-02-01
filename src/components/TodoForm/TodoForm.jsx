import React from "react";
import styled from "styled-components";
import { TodoList } from "../TodoList/TodoList";

export const TodoForm = ({ todo, dispatch, setInputText }) => {
  return (
    <Conteiner>
      {todo.map((item) => {
        return (
          <TodoList
            item={item}
            key={item.id}
            title={item.title}
            dispatch={dispatch}
            setInputText={setInputText}
          />
        );
      })}
    </Conteiner>
  );
};

const Conteiner = styled.ul`
  padding: 0;
  margin: 0;
  padding: 10px;
  width: 490px;
`;
