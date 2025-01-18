import { useState } from "react";
import { List } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

export default function TodosList({ tasks, setTasks }) {
  return (
    <List sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {tasks.map(({ id, title, text, complete }) => (
        <TodoItem
          key={id}
          id={id}
          title={title}
          text={text}
          complete={complete}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </List>
  );
}
