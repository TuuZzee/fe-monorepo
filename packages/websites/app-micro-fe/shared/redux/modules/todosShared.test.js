import { addTodo, removeTodo } from './todosShared';

const { makeStore } = require('../store');

describe('WEB.APP-MICRO-FE-SHARED.TODOS-SHARED Redux store', () => {
  let store;

  const todoContent = 'Unit test todo template item content';

  beforeAll(() => {
    store = makeStore();
  });

  // Init
  it('initializes the store', async () => {
    expect(store.getState().todosShared).toEqual([]);
  });

  // addTodo
  it('Add an item in the todosShared store when doing a addTodo', async () => {
    await store.dispatch(addTodo(todoContent));

    expect(store.getState().todosShared.length).toEqual(1);
    expect(store.getState().todosShared[0].text).toEqual(todoContent);
  });

  // removeTodo
  it('Remove the specified ID item in the todosShared store when doing a removeTodo', async () => {
    const todoItem = store.getState().todosShared[0];

    await store.dispatch(removeTodo(todoItem));

    expect(store.getState().todosShared.length).toEqual(0);
  });
});
