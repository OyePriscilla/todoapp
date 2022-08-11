import React from "react";
import ReactDOM from "react-dom/client";
import About from "../src/pages/About";
import NoMatch from "../src/pages/NoMatch";
import Header from "./components/Header";

import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="about" element={<About />} />
      <Route path="nomatch" element={<NoMatch />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
