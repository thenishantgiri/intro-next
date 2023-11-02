'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const completeTodo = async (id: any) => {
  await db.todo.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  });

  revalidatePath('/todos');
};

export const newTodo = async (formData: FormData) => {
  const newTodo = formData.get('content') as string;

  if (newTodo) {
    await db.todo.create({
      data: {
        content: newTodo,
      },
    });

    revalidatePath('/todos');
  }
};
