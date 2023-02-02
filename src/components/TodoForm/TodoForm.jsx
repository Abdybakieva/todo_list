import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContent } from "../../store/TodoContext";
import { TodoList } from "../TodoList/TodoList";

export const TodoForm = () => {
  const {state}=useContext(TodoContent)
  return (
    <Conteiner>
      {state.map((item) => {
        return (
          <TodoList
            item={item}
            key={item.id}
            title={item.title}
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
