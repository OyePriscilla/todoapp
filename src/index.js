import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Header from './components/Header';

import TodoContainer from './components/TodoContainer';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="about" element={<About />} />       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
