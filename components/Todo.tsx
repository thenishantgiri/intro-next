'use client';

import { completeTodo } from '@/utils/actions';
import { useTransition } from 'react';

const Todo = ({ todo }: any) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`border cursor-pointer border-black/10 m-2 pl-6 pr-4 ${
        todo.completed ? 'line-through text-gray-600' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
