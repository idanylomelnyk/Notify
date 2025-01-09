import { List } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

export default function TodosList({ todos, setTodos }) {
  return (
    <List sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {todos.map(({ id, title, text, complete }) => (
        <TodoItem
          key={id}
          id={id}
          title={title}
          text={text}
          complete={complete}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </List>
  );
}
