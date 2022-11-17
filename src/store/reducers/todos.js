const initialState = {
  todos: [],
};

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            // Use an auto-incrementing numeric ID for this example
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: true,
          },
        ],
      };

    case "todos/todoDeleted":
      return {
        ...state,
        todos: state.todos.filter(
          (todo) =>
            // If this isn't the todo item we're looking for, leave it alone
            todo.id !== action.payload
        ),
      };

    case "todos/todoUpdated":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          // If this isn't the todo item we're looking for, leave it alone
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text,
            };
          }

          // We've found the todo that has to change. Return a copy:
          return todo;
        }),
      };

    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
};
