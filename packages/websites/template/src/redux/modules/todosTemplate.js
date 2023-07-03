export const ADD_TODO = 'template/todo/ADD_TODO';
export const REMOVE_TODO = 'template/todo/REMOVE_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function removeTodo(todo) {
  return { type: REMOVE_TODO, todo };
}

const todosTemplateReducer = (state = [], action = {}) => {
  const { type, text, todo } = action;

  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Math.random().toString(36).substring(2),
          text,
        },
      ];
    case REMOVE_TODO:
      return state.filter(i => i !== todo);
    default:
      return state;
  }
};

export default todosTemplateReducer;
