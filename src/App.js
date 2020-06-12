import React, { Component } from 'react';
import {v1 as uuid} from "uuid"; 
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';


class App extends Component {
  state={
    items:[{id:1,title:"weke up"},{id:1,title:"Make a breakfast"}],
    id:uuid(),
    item:'',
    edititem:false
  }
  handleChange=(e)=>{
    console.log('handle change')
  }
  handleSubmit=(e)=>{
    console.log('handle submit')
  }
  clearList=()=>{
    console.log('clear List')
  }
  handleEdit=(id)=>{
    console.log(`edit the id ${id}`)
  }
  handleDelete=(id)=>{
    console.log(`Delete the id ${id}`)
  }

  render()
  {
    console.log(this.state);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
      <h3 className="text-capitalize text-center"> Todo Input</h3>
      <TodoInput
      item={this.state.item}
      handleChange={this.handleChange} 
      handleSubmit={this.handleSubmit}
      />
      
      <TodoItem
      items={this.state.items}
      clearList={this.clearList}
      handleEdit={this.handleEdit}
      handleDelete={this.handleDelete}
       />    
   </div>
    </div>
    
    </div>
  );
}
}
export default App;
