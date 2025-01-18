import {
  Box,
  Button,
  Card,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function TodoItem({ id, title, text, setTasks }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTask, setEditTask] = useState({ title: "", text: "" });

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(false);

  const deleteItem = (id) => {
    setTasks((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const startEdit = (id) => {
    setEditTaskId(id);
    setEditTask({ title, text });
  };

  const saveChange = () => {
    setTasks((prev) => {
      return prev.map((item) =>
        item.id === editTaskId
          ? { ...item, title: editTask.title, text: editTask.text }
          : item
      );
    });

    setEditTaskId(null);
  };

  const cancelEdit = () => {
    setEditTaskId(null);
  };

  return (
    <ListItem
      sx={{
        padding: 0,
        width: "300px",
        minHeight: "154px",
        flexGrow: 1,
      }}
    >
      <Card
        sx={{
          padding: 2,
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {id === editTaskId ? (
            <TextField
              autoFocus
              value={editTask.title}
              onChange={(e) =>
                setEditTask({ ...editTask, title: e.target.value })
              }
              variant='standard'
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "none",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiInput-root": {
                  fontWeight: 700,
                },

                width: "100%",
              }}
            ></TextField>
          ) : (
            <Typography fontWeight={700}>{title}</Typography>
          )}
          <Stack direction='row'>
            {editTaskId ? (
              <Stack direction='row'>
                <Button
                  variant='text'
                  size='small'
                  onClick={() => saveChange()}
                >
                  Save
                </Button>
                <Button
                  variant='text'
                  size='small'
                  onClick={() => cancelEdit()}
                >
                  Cancel
                </Button>
              </Stack>
            ) : (
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            )}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() => {
                  startEdit(id);
                  handleClose();
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  deleteItem(id);
                  handleClose();
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </Stack>
        </Box>
        {id === editTaskId ? (
          <TextField
            autoFocus
            mt={1}
            value={editTask.text}
            onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}
            variant='standard'
            multiline
            sx={{
              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInput-root": {
                padding: 0,
                mt: 1,
                lineHeight: 1.5,
              },
              width: "100%",
            }}
          ></TextField>
        ) : (
          <Typography mt={1}>{text}</Typography>
        )}
      </Card>
    </ListItem>
  );
}
