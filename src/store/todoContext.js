import { createContext, useEffect, useReducer, useState } from "react";

export const TodoContext = createContext({});

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

  //   if (action.type === 'addTodo') {
  //     return [
  //         ...state,{
  //             id:Math.now(),
  //             title: action.payload,
  //             completed:false
  //         }
  //     ]
  //   }

  //   if (action.type === Actions.DeleteTodo) {
  //     return {
  //       todos: state.todos.filter((item) => {
  //         item.id === !payload;
  //       }),
  //     };
  //   }
  // else {
  //     state
  // }
}


export const TodoContextProvaider = (props) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("TODO")) || []
  );
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(state));
  }, [state]);

const value={
inputText,
dispatch,
setInputText,
state,
reducer,
}

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
};
