import serviceConfig from '../../service.config';

export const ADD_TODO = `${serviceConfig.serviceName}/todosShared/ADD_TODO`;
export const REMOVE_TODO = `${serviceConfig.serviceName}/todosShared/REMOVE_TODO`;

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function removeTodo(todo) {
  return { type: REMOVE_TODO, todo };
}

const todosSharedReducer = (state = [], action = {}) => {
  const { type, text, todo } = action;

  switch (type) {
    case ADD_TODO:
      return [...state, { id: Math.random().toString(36).substring(2), text }];
    case REMOVE_TODO:
      return state.filter(i => i !== todo);
    default:
      return state;
  }
};

export default todosSharedReducer;
