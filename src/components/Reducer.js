
// function reducer(state, action) {
//   switch (action.type) {
//     case "addTodo":
//       return [
//         ...state,
//         {
//           id: Math.random(),
//           title: action.payload,
//           completed: false,
//         },
//       ];
//     case "chek":
//       return state.map((todo) => {
//         if (todo.id === action.payload) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });
//     case "deleteTodo":
//       return state.filter((item) => item.id !== action.payload);

//     default:
//       return state;
//   }

// }
// export default reducer;
