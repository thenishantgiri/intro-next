import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const fetchTodos = async () => {
  const data = await db.todo.findMany({});
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
