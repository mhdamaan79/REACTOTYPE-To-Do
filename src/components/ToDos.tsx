import { useSearchParams } from "react-router-dom";
import { ToDo, useToDo } from "../store/todoContext";

const ToDos = () => {
  const { todos, toggleToDoAsCompleted, handleDeleteToDo } = useToDo();

  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("task");

  let filterData = todos;

  // filter active tasks
  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  // filter completed tasks
  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="main-task">
      {filterData.map((todo: ToDo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`rt-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleToDoAsCompleted(todo.id)}
            />
            <label htmlFor={`rt-${todo.id}`}>{todo.task}</label>

            {todo.completed && (
              <button type="button" onClick={() => handleDeleteToDo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ToDos;
