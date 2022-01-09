import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./content";
import Header from "./header";

function MainLayout() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default MainLayout;
