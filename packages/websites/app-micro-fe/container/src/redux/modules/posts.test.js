import { addPost, removePost } from './posts';

const { makeStore } = require('../store');

describe('WEB.APP-MICRO-FE-CONT.POSTS Redux store', () => {
  let store;

  const todoContent = 'Unit test todo template item content';

  beforeAll(() => {
    store = makeStore();
  });

  // Init
  it('initializes the store', async () => {
    expect(store.getState().posts).toEqual([]);
  });

  // addPost
  it('Add an item in the posts store when doing a addPost', async () => {
    await store.dispatch(addPost(todoContent));

    expect(store.getState().posts.length).toEqual(1);
    expect(store.getState().posts[0].text).toEqual(todoContent);
  });

  // removePost
  it('Remove the specified ID item in the posts store when doing a removePost', async () => {
    const todoItem = store.getState().posts[0];

    await store.dispatch(removePost(todoItem));

    expect(store.getState().posts.length).toEqual(0);
  });
});
