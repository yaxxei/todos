import { observer } from "mobx-react";
import { Task } from "../../store/todosStore";
import { Checkbox } from "../ui/Checkbox/Checkbox";

interface TaskListProps {
  tasks: Task[];
  changeTaskStatus: (taskId: string) => void;
  removeTask: (taskId: string) => void;
}

export const TaskList = observer(
  ({ tasks, changeTaskStatus, removeTask }: TaskListProps) => {
    return (
      <div className="tasks">
        {tasks.map((t) => (
          <div key={t.id} className={t.isDone ? "completed" : ""}>
            <div className="checkbox">
              <Checkbox
                isChecked={t.isDone}
                setChcked={() => changeTaskStatus(t.id)}
              />
            </div>
            <p>{t.task}</p>
            <button onClick={() => removeTask(t.id)}>
              <span>del</span>
            </button>
          </div>
        ))}
      </div>
    );
  }
);
