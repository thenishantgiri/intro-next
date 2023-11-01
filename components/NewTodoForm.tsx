import { newTodo } from '@/utils/actions';

function NewTodoForm() {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="content" className="border border-black/25" />
        <button type="submit">create</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
