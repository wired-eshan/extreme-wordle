import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Game from "./components/Game";
import Playground from "./Playground";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
