import React from 'react';
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import './components/Home.css';

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
