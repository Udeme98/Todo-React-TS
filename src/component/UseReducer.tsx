import { useReducer } from "react";
import { TodoModel } from "../todoModel";

type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const initialState: TodoModel[] = [];

const TodoReducer = (state: TodoModel[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) =>
        todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
  }
};

const UseReducer = () => {
  const [state, disptch] = useReducer(TodoReducer, initialState);
  return <div>state</div>;
};
export default UseReducer;
