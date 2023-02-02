import { createContext, useEffect, useReducer, useState } from "react"

export const TodoContent = createContext({});

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload,
          completed: false,
        },
      ];
    case "chek":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "deleteTodo":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }

}
// export default reducer;

export const TodoContentProvider=(props)=>{
    const [state, dispatch] = useReducer(
      reducer,
      JSON.parse(localStorage.getItem("TODO")) || []
      );
    
      const [inputText, setInputText] = useState("");

    useEffect(() => {
      localStorage.setItem("TODO", JSON.stringify(state));
    }, [state]);

    const value={
        state,
        dispatch,
        inputText,
        setInputText,
        reducer
    }
    return(
      
       <TodoContent.Provider value={value}>{props.children}</TodoContent.Provider>)
       
}