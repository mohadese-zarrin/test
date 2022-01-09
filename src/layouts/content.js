import React from "react";
import { Routes, Route} from "react-router-dom";
import routes from "../routes/routes";

function Content() {
  console.log(routes);
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}

export default Content;
