import React,{Component} from 'react';
import TodoItem from './TodoItem' ;
export default class  TodoList extends Component
{
render()
{
    return(
        <>
        <h1>Hello from todlist</h1>
        <TodoItem />
        </>
    )
}
}  