import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { TodoModel } from "../todoModel";
import { MdDone } from "react-icons/md";

type SingleProp = {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: SingleProp) => {
  return (
    <form className="todos_single">
      <span className="todos_single_text">{todo.todo}</span>

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};
export default SingleTodo;
