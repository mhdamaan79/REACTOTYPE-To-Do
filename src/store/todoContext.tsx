import { ReactNode, createContext, useContext, useState } from "react";

export type ToDosProviderProps = {
  children: ReactNode;
};

export type ToDo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type ToDosContext = {
  todos: ToDo[];
  handleAddTodo: (task: string) => void; // this is called "call signature"
  toggleToDoAsCompleted: (id: string) => void;
  handleDeleteToDo: (id: string) => void;
};

// --- create context ---
export const todoContext = createContext<ToDosContext | null>(null);

// --- provide context ---
export const TodoContextProvider = ({ children }: ToDosProviderProps) => {
  const [todos, setTodos] = useState<ToDo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todo") || "[]";
      return JSON.parse(newTodos) as ToDo[];
    } catch (error) {
      return [];
    }
  });

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: ToDo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  // completed check
  const toggleToDoAsCompleted = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        // check for same id
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  // delete the individual data using id
  const handleDeleteToDo = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => {
        return todo.id !== id;
      });
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <todoContext.Provider
      value={{ todos, handleAddTodo, toggleToDoAsCompleted, handleDeleteToDo }}
    >
      {children}
    </todoContext.Provider>
  );
};

// --- use context ---
export const useToDo = () => {
  const todosConsumer = useContext(todoContext);
  if (!todosConsumer) {
    throw new Error("useTodos use outside of Provider");
  }

  return todosConsumer;
};
