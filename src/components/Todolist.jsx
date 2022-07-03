import React from "react";
import {useState} from "react";
import { useEffect } from "react";


const Todolist = () =>{

    const [data, setData] = useState([]);

    const displaydata=()=>{
        fetch(`http://localhost:3001/tasks`)
         .then((res)=>res.json())
         .then((res)=>setData(res))
         .catch((err)=>console.log(err))
    }


    React.useEffect(()=>{
      displaydata();
    },[data]);

    return(
        <>
        <h1>List: </h1>
        {data.map((todo) => (
        <h1 key={todo.id}>{todo.task}</h1>
      ))}
        </>
    )
}

export default Todolist;