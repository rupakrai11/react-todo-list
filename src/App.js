import React, { Component } from 'react';
import {v1 as uuid} from "uuid"; 
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';


class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    edititem:false
  }
  handleChange=(e)=>{
   this.setState({
     item:e.target.value
   });
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    // ... spread oprator
    const UpdatetedItems=[...this.state.items,newItem]

    this.setState({
      items:UpdatetedItems,
      item:'',
      id:uuid(),
      edititem:false

    });
  }
  clearList=()=>{
    this.setState({
      items:[]
    })
     
    
  }
  handleEdit=(id)=>{
     console.log(`Handle Edit ${id}`)
  }
  handleDelete=(id)=>{
    const filterItems=this.state.items.filter
    (item=>item.id !==id)
    this.setState({
      items:[]
    })
   
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
      
      <TodoList  items={this.state.items}
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
