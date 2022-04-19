import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

const TodoItem = (props) => {
  const [todo, settodo] = useState(props.todo);
  const title =
    todo.title.length > 50 ? todo.title.substr(0, 50) + "..." : todo.title;

  const handleChange = () => {
    settodo({ ...todo, completed: !todo.completed });
  };

  return (
    <div>
      <div className="todo-item d-flex align-items-center rounded row mb-2 pe-2">
        <Grid container className="align-items-center">
          <Grid item xs={2}>
            <Checkbox
              checked={todo.completed}
              color="success"
              onChange={handleChange}
            />
          </Grid>
          <Grid
            item
            xs={9}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {title}
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => props.deleteTodo(todo.id)}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TodoItem;
