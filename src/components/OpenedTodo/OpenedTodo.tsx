import "../../styles/OpenedTodo.scss";
import { observer } from "mobx-react";
import { Todo } from "../../store/todosStore";
import { useState } from "react";
import { useStore } from "../../store/rootStore";
import { TasksFilter } from "./TasksFilter";
import { TaskAdder } from "./TaskAdder";
import { TaskList } from "./TaskList";

interface OpenedTodoProps {
  todo: Todo;
}

export const OpenedTodo = observer(({ todo }: OpenedTodoProps) => {
  const { todosStore } = useStore();

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setInputValid] = useState(false);

  const filteredTasks = todo.tasks.filter((t) => {
    if (filter === "all") return true;
    if (filter === "active") return !t.isDone;
    if (filter === "completed") return t.isDone;
  });

  function changeTaskStatusHandler(taskId: string) {
    todosStore.changeTaskStatus(todo.id, taskId);
  }

  function removeTaskHandler(taskId: string) {
    todosStore.removeTaskFromTodo(todo.id, taskId);
  }

  function onInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    setInputValue(value);
    setInputValid(value.length > 0);
  }

  function onAddButtonClickHandler() {
    if (!isInputValid) return;
    todosStore.addTaskToTodo(todo.id, inputValue);
  }

  return (
    <div className="opened-todo">
      <h1>{todo.title}</h1>
      <TaskAdder
        inputValue={inputValue}
        isInputValid={isInputValid}
        onAddButtonClick={onAddButtonClickHandler}
        onInputChange={onInputChangeHandler}
      />
      <TasksFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        changeTaskStatus={changeTaskStatusHandler}
        removeTask={removeTaskHandler}
      />
    </div>
  );
});
