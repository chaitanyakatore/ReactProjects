import React from "react";
import Header from "./Header";
import { Stack } from "react-bootstrap";
import { Height } from "@mui/icons-material";

const backgroundimg = "./public/img/backgroundimg.jpg";
const homestyle = <background-image>URL(backgroundimg)</background-image>;

const Home = () => (
  <stack sx={{ background: homestyle }}>
    <img
      src="homestyle"
      style={{ backgroundRepeat: "no-repeat", Height: 500 }}
    />
  </stack>
);
export default Home;
