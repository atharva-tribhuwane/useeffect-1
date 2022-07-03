import React from "react";
import {useState} from "react";
import Todoinput from "./Todoinput";
import Todolist from "./Todolist";


const Todo = () =>{
    return(
        <>
            <h1>Todo List</h1>
            <Todoinput/>
            <Todolist/>
        </>
    )
}

export default Todo;