import "./App.scss";
import { useState } from "react";
import { OpenedTodo } from "./components/OpenedTodo/OpenedTodo";
import { useStore } from "./store/rootStore";
import { Todo } from "./store/todosStore";
import { Left } from "./components/Left/Left";

function App() {
  const { todosStore } = useStore();
  const [openedTodo, setOpenedTodo] = useState<Todo | undefined>();

  function openTodoHandler(todoId: string) {
    setOpenedTodo(todosStore.getTodoById(todoId));
  }

  return (
    <div id="container">
      <Left openTodo={openTodoHandler} />
      <>
        {!openedTodo && (
          <div className="not-selected">
            <h1>Select the todo</h1>
          </div>
        )}
        {openedTodo && <OpenedTodo todo={openedTodo} />}
      </>
    </div>
  );
}

export default App;
