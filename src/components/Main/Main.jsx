import React from "react";
import styled from "styled-components";
import Button from "../IU/Button";

export const Main = ({ inputText, setInputText, dispatch }) => {
  const AddInputHandler = (event) => {
    setInputText(event.target.value);
  };

  const AddButton = (e) => {
    e.preventDefault();
    dispatch({ type: "addTodo", payload: inputText });
    setInputText("");
  };

  return (
    <Conteiner>
      <StyledMain type="text" value={inputText} onChange={AddInputHandler} />
      <Button title="Add" onClick={AddButton}/>
    </Conteiner>
  );
};

const StyledMain = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 20px;
  :hover{
    background-color: #cecfcbea;
    color: #0000009e;
  }
`;

const Conteiner = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 20px ;
  

  gap: 1rem;
`;
