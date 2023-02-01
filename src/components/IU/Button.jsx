import React from "react";
import styled from "styled-components";

function Button({ title, onClick }) {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

export default Button;
const StyledButton=styled.button`
  width: 80px;
  height: 32px;
  border-radius: 20px;
  background-color: #00ff5592;
  border: none;
  :hover{
    background-color: #10d42a9e;
    border: 1px solid;
    color: wheat;
  }
`