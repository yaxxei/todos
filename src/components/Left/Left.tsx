import "../../styles/Left.scss";
import { useStore } from "../../store/rootStore";
import { TodoAdder } from "./TodoAdder";
import { TodoList } from "./TodoList";
import { useState } from "react";

interface LeftProps {
  openTodo: (todoId: string) => void;
}

// todo: use to show error
// type InputErrorTypes = "Limit" | "Duplicate";

export function Left({ openTodo }: LeftProps) {
  const { todosStore } = useStore();

  const [isInputValid, setInputValid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function onInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    setInputValue(value);

    value.length ? setInputValid(true) : setInputValid(false);
    if (
      todosStore.todos.find(
        (t) => t.title.toLowerCase() === value.toLowerCase()
      )
    )
      setInputValid(false);
  }

  function onButtonClickHandler() {
    if (!isInputValid) return;
    todosStore.addTodo(inputValue);
    openTodo(todosStore.todos[todosStore.todos.length - 1].id);

    setInputValue("");
    setInputValid(false);
  }

  return (
    <div id="left">
      <TodoAdder
        inputValue={inputValue}
        isInputValid={isInputValid}
        onInputChange={onInputChangeHandler}
        onButtonClick={onButtonClickHandler}
      />
      <TodoList todos={todosStore.todos} openTodo={openTodo} />
    </div>
  );
}
