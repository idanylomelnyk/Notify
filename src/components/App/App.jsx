import { CssBaseline, Container } from "@mui/material";
import { useState } from "react";
import TodosList from "../TodosList/TodosList";
import AddForm from "../AddForm/AddForm";

export default function App() {
  const [todos, setTodos] = useState([
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

  return (
    <CssBaseline>
      <Container>
        <AddForm todos={todos} setTodos={setTodos} />
        <TodosList todos={todos} setTodos={setTodos} />
      </Container>
    </CssBaseline>
  );
}
