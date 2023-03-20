import { createSlice, nanoid } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoItem {
  id: string;
  text: string;
}

interface RemoveTodoPayload {
  id: string;
}

const initialState: Record<string, TodoItem> = {};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoItem>) => {
        return { ...state, [action.payload.id]: action.payload };
      },
      prepare: (text: string) => {
        const id = nanoid();
        return { payload: { id, text } };
      },
    },
    removeTodo: {
      reducer: (state, action: PayloadAction<RemoveTodoPayload>) => {
        const newState = { ...state };
        delete newState[action.payload.id];
        return newState;
      },
      prepare: (id: string) => ({ payload: { id } }),
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
