import React from 'react';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col bg-danger">
      <h1>Hello Form new app Todo list</h1>
      <TodoList/>
      <TodoInput/>

   </div>
    </div>
    
    </div>
  );
}

export default App;
