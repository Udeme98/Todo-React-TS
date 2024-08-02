import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { TodoModel } from "../todoModel";
import { MdDone } from "react-icons/md";
import { useState } from "react";

type SingleProp = {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: SingleProp) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todoItem) => {
        return todoItem.id === id
          ? { ...todoItem, isDone: !todoItem.isDone }
          : todoItem;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, todo: editTodo } : todoItem
      )
    );
    setEdit(false);
  };

  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos_single_text"
        />
      ) : todo.isDone ? (
        <s className="todos_single_text">{todo.todo}</s>
      ) : (
        <span className="todos_single_text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
export default SingleTodo;
