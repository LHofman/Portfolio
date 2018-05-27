import React from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";

export default () => (
  <Container className="marginTop">
    <div style={{ float: "left" }}>
      <Navbar />
    </div>
    <Main />
  </Container>
);
