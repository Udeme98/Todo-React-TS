import { useState } from "react";
import InputField from "./component/InputField";
import { TodoModel } from "./todoModel";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
