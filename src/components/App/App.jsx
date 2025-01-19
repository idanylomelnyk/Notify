import { CssBaseline, Container, Box } from "@mui/material";
import { useState } from "react";
import TodosList from "../TodosList/TodosList";
import AddForm from "../AddForm/AddForm";
import SearchAppBar from "../SearchAppBar/SearchAppBar";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "My first todo",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, iusto. Doloribus minima ipsam tenetur.",
      complete: false,
    },
    {
      id: 2,
      title: "My second todo",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, iusto. Doloribus minima ipsam tenetur.",
      complete: false,
    },
    {
      id: 3,
      title: "My third todo",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, iusto. Doloribus minima ipsam tenetur.",
      complete: false,
    },
    {
      id: 4,
      title: "My forth todo",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, iusto. Doloribus minima ipsam tenetur.",
      complete: false,
    },
    {
      id: 5,
      title: "My fifth todo",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, iusto. Doloribus minima ipsam tenetur.",
      complete: false,
    },
    {
      id: 6,
      title: "My sixth todo",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, iusto. Doloribus minima ipsam tenetur.",
      complete: false,
    },
  ]);
  const [query, setQuery] = useState("");

  const getFilteredTasks = () => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.text.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <CssBaseline>
      <SearchAppBar query={query} setQuery={setQuery} />
      <Container>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AddForm tasks={tasks} setTasks={setTasks} />
        </Box>
        <TodosList tasks={getFilteredTasks()} setTasks={setTasks} />
      </Container>
    </CssBaseline>
  );
}
