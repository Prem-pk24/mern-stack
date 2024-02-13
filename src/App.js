import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./component/common/Login";
import { Register } from "./component/common/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
