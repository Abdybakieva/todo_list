import { Main } from "./components/Main/Main";
import { TodoForm } from "./components/TodoForm/TodoForm";
import styled from "styled-components";
import { TodoContentProvider } from "./store/TodoContext";

export const App = () => {
  // const [state, dispatch] = useReducer(
  //   reducer,
  //   JSON.parse(localStorage.getItem("TODO")) || []
  // );
  // const [inputText, setInputText] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("TODO", JSON.stringify(state));
  // }, [state]);

  return (
    <TodoContentProvider>
      <StyledContainer>
        <Main />
        <TodoForm />
      </StyledContainer>
    </TodoContentProvider>
  );
};

const StyledContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #708496;
  border-radius: 12px;
  -webkit-box-shadow: 10px 11px 21px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 10px 11px 21px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 10px 11px 21px 10px rgba(0, 0, 0, 0.2);
  margin: 2 auto;
`;
