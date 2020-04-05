import React from "react";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <TodoList />
    </div>
  );
}

export default App;
