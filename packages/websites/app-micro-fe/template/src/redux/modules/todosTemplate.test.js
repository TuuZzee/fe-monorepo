import { addTodo, removeTodo } from './todosTemplate';

const { makeStore } = require('../store');

describe('WEB.APP-MICRO-FE-TEMPL.TODOS-TEMPL Redux store', () => {
  let store;

  const todoContent = 'Unit test todo template item content';

  beforeAll(() => {
    store = makeStore();
  });

  // Init
  it('initializes the store', async () => {
    expect(store.getState().todosTemplate).toEqual([]);
  });

  // addTodo
  it('Add an item in the todosTemplate store when doing a addTodo', async () => {
    await store.dispatch(addTodo(todoContent));

    expect(store.getState().todosTemplate.length).toEqual(1);
    expect(store.getState().todosTemplate[0].text).toEqual(todoContent);
  });

  // removeTodo
  it('Remove the specified ID item in the todosTemplate store when doing a removeTodo', async () => {
    const todoItem = store.getState().todosTemplate[0];

    await store.dispatch(removeTodo(todoItem));

    expect(store.getState().todosTemplate.length).toEqual(0);
  });
});
