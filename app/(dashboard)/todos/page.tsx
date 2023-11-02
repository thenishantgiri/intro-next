import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const fetchTodos = async () => {
  // Loading UI
  await new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000));

  // Error UI
  // await new Promise((resolve, reject) => setTimeout(() => reject(0), 2000));

  const data = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
};

const TodoPage = async () => {
  let todos = await fetchTodos();
  console.log(todos);
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoPage;
