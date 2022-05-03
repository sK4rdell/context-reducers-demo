import React from 'react';
import './App.css';
import {Todo} from "./typings";
import {TodoComponent} from "./components/TodoComponent";
import {TodoView} from "./views/TodoView";

function App() {
  return (
    <div className="App">
      <TodoView/>
    </div>
  );
}

export default App;
