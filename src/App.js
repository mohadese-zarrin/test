import React from "react";
import "./App.css";
import "./scss/index.scss";
import MainLayout from "./layouts";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Suspense fallback="loading....">
      <Router>
        <MainLayout />
      </Router>
    </React.Suspense>
  );
}

export default App;
