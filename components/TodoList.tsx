import Todo from './Todo';

const TodoList = ({ todos }: any) => {
  return (
    <div>
      {todos.map((todo: any) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
