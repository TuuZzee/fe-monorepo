import serviceConfig from '../../../service.config';

export const ADD_POST = `${serviceConfig.serviceName}/posts/ADD_POST`;
export const REMOVE_POST = `${serviceConfig.serviceName}/posts/REMOVE_POST`;

export function addPost(text) {
  return { type: ADD_POST, text };
}

export function removePost(post) {
  return { type: REMOVE_POST, post };
}

const postsReducer = (state = [], action = {}) => {
  const { type, text, post } = action;

  switch (type) {
    case ADD_POST:
      return [...state, { id: Math.random().toString(36).substring(2), text }];
    case REMOVE_POST:
      return state.filter(i => i !== post);
    default:
      return state;
  }
};

export default postsReducer;
