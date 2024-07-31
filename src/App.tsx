import { useState } from "react";
import InputField from "./component/InputField";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
