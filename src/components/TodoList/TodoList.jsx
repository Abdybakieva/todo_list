import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContent } from "../../store/TodoContext";
import Button from "../IU/Button";

export const TodoList = ({ title, item}) => {
  const {dispatch,setInputText} = useContext(TodoContent)
  const HandlerDelete = () => {
    dispatch({ type: "deleteTodo", payload: item.id });
  };

  const comp = (id) => {
  dispatch({ type: "chek", payload: id });
  };                                                      

  const edit = (title, id) => {
    setInputText(title);
    HandlerDelete(id);
  };

  return (
    <StyledContainer>
      <Styledli>
        <StyledInputAndButton>
          <div>
            <p className={`${item.completed ? "line-through" : "no-line"}`}>
              {title}
            </p>
          </div>
          <StyledBox>
            <Checkbox type="checkbox" onChange={() => comp(item.id)} />
            <Button title="Delete" onClick={HandlerDelete} />
            <Button title="Edit" onClick={() => edit(item.title, item.id)} />
          </StyledBox>
        </StyledInputAndButton>
      </Styledli>
    </StyledContainer>
  );
};

const Styledli = styled.li`
  list-style: none;
  border: 1px solid #c3c8c9;
  min-width: 350px;
  min-height: 35px;
  border-radius: 20px;
  text-align: center;
  justify-content: start;
  background-color: white;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
  padding: 0 20px;
  .no-line {
    color: #000000;
  }

  .line-through {
    color: #030303;
    text-decoration: line-through;
  }
`;
const StyledContainer = styled.div`
  /* display: flex; */
`;

const StyledInputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledBox=styled.div`
display: flex;
align-items: center;
justify-content: center;
  gap: 10px;
`

const Checkbox = styled.input`
  transform: scale(1.7);
`;