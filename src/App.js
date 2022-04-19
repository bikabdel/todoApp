import { useEffect, useRef, useState } from "react";
import "./app.css";
import TodoItem from "./TodoItem";

const data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

function App() {
  const [todos, settodos] = useState(data);
  const textInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    settodos([
      ...todos,
      {
        userId: 1,
        id: todos.length + 1,
        title: textInput.current.value,
        completed: false,
      },
    ]);
    textInput.current.value = "";
  };

  function deleteTodo(id) {
    let newTodos = todos.filter((todo) => todo.id !== id);
    console.log(newTodos);
    settodos(newTodos);
  }

  return (
    <div className="app-container container-fluid  ">
      <div>
        <p className="display-1 text-center pt-5">TODO APP</p>
      </div>
      <div className="todo-container container mt-4 px-5 py-4 rounded">
        <div className="form-input mb-3">
          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Add todo..."
              className="form-control"
              ref={textInput}
            />
          </form>
        </div>
        <div className="todo-list px-2">
          {todos.length == [] ? (
            <img src="./img/nothing.jpg" className="img-fluid" />
          ) : (
            todos
              .map((todo, key) => {
                return (
                  <TodoItem todo={todo} key={key} deleteTodo={deleteTodo} />
                );
              })
              .reverse()
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
