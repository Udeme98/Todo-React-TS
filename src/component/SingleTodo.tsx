import { TodoModel } from "../todoModel";

type SingleProp = {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: SingleProp) => {
  return (
    <form className="todos_single">
      <span className="todos_single_text">{todo.todo}</span>
    </form>
  );
};
export default SingleTodo;
