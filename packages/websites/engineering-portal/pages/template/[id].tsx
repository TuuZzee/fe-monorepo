import React, { FC } from 'react';

import { useRouter } from 'next/router';

import AuthenticatedContent from '../../src/components/shared/AuthenticatedContent';
import Layout from '../../src/components/shared/Layout';
import TodoItem from '../../src/components/Template/TodoItem';
import wordingPage from '../../src/locale/template';
import { useAppSelector } from '../../src/redux/hooks';
import { TodoItem as TodoItemType } from '../../src/redux/slices/todos';

const TodoPage: FC = function () {
  const { query } = useRouter();
  const todoId = query.id as string;
  const todo = useAppSelector(({ todos }) =>
    Object.values(todos).find((t: TodoItemType) => t.id === todoId),
  );

  return (
    <Layout wordingPage={wordingPage}>
      <AuthenticatedContent>{todo && <TodoItem todo={todo} />}</AuthenticatedContent>
    </Layout>
  );
};

export default TodoPage;
