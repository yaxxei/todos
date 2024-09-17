import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  task: string;
  isDone: boolean;
}

export class TodosStore {
  todos: Todo[] = [
    {
      id: uuidv4(),
      title: "Shopping",
      tasks: [
        {
          id: uuidv4(),
          task: "Milk",
          isDone: true,
        },
        {
          id: uuidv4(),
          task: "Bread",
          isDone: false,
        },
        {
          id: uuidv4(),
          task: "Cheese",
          isDone: false,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Homes",
      tasks: [
        {
          id: uuidv4(),
          task: "Wash the dishes",
          isDone: false,
        },
        {
          id: uuidv4(),
          task: "Vacuum",
          isDone: false,
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todoTitle: string): boolean {
    if (this.todos.find((t) => t.title === todoTitle)) return false;

    this.todos.push({
      id: uuidv4(),
      title: todoTitle,
      tasks: [],
    });
    return true;
  }

  removeTodo(todoId: string): boolean {
    if (!this.todos.find((t) => t.id === todoId)) return false;

    this.todos = this.todos.filter((t) => t.id !== todoId);
    return true;
  }

  addTaskToTodo(todoId: string, task: string): boolean {
    let todo = this.todos.find((t) => t.id === todoId);
    if (!todo) return false;

    todo.tasks.push({
      id: uuidv4(),
      task,
      isDone: false,
    });

    return true;
  }

  removeTaskFromTodo(todoId: string, taskId: string): boolean {
    let todo = this.todos.find((t) => t.id === todoId);
    if (!todo) return false;

    todo.tasks = todo.tasks.filter((t) => t.id !== taskId);

    return true;
  }

  changeTaskStatus(todoId: string, taskid: string): boolean {
    let todo = this.todos.find((t) => t.id === todoId);
    if (!todo) return false;

    let task = todo.tasks.find((t) => t.id === taskid);
    if (!task) return false;

    task.isDone = !task.isDone;
    return true;
  }

  isAllTasksDone(todoId: string): boolean {
    let todo = this.todos.find((t) => t.id === todoId);
    if (!todo) return false;

    return todo.tasks.every((t) => t.isDone);
  }

  getTodoById(todoId: string): Todo | undefined {
    return this.todos.find((t) => t.id === todoId);
  }
}
