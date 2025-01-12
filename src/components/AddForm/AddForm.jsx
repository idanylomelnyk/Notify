import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { nanoid } from "nanoid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";

export default function AddForm({ setTasks }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addTodo = (newTodo) => {
    setTasks((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target.elements;

    addTodo({
      id: nanoid(),
      title: form.title.value,
      text: form.description.value,
      complete: false,
    });

    e.target.reset();
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <AddCircleIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <Box
          position='relative'
          component='form'
          sx={{
            width: "300px",

            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
          onSubmit={handleSubmit}
        >
          <IconButton
            sx={{ position: "absolute", top: "7px", right: "7px" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant='h6'>Create new task</Typography>

          <TextField label='Title' name='title'></TextField>
          <TextField
            label='Description'
            name='description'
            multiline
            minRows={4}
            maxRows={4}
          ></TextField>
          <Button type='submit' variant='contained'>
            Save
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
