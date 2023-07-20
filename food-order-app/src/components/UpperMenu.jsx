import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#000",
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: "center",
  color: "#fff",
}));

export default function UpperMenu() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Link to="/">
          <IconButton>
            <Item>Home</Item>
          </IconButton>
        </Link>
        <Link to="/Menu">
          <IconButton>
            <Item>Menu</Item>
          </IconButton>
        </Link>
        <Link to="/Location">
          <IconButton>
            <Item>Location</Item>
          </IconButton>
        </Link>
        <Link to="/About">
          <IconButton>
            <Item>About</Item>
          </IconButton>
        </Link>
      </Stack>
    </div>
  );
}
