import {
  Box,
  Card,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoItem({ id, title, text, complete }) {
  return (
    <ListItem sx={{ padding: 0, width: "300px", flexGrow: 1 }}>
      <Card sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={700}>{title}</Typography>
          <Stack direction='row'>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Box>
        <Typography mt={1}>{text}</Typography>
      </Card>
    </ListItem>
  );
}
