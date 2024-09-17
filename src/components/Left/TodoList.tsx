import "../../styles/Left.scss";
import { Todo } from "../../store/todosStore";

import listImg from "../../assets/tabler-icon-list.svg";

interface TodoListProps {
  todos: Todo[];
  openTodo: (todoId: string) => void;
}

export function TodoList({ todos, openTodo }: TodoListProps) {
  return (
    <div className="todos">
      {todos.map((t) => (
        <div key={t.id}>
          <div className="img-wrapper">
            <img src={listImg} />
          </div>
          <button onClick={() => openTodo(t.id)}>
            <span>{t.title}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
