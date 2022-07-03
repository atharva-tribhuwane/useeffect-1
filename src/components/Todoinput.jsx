import React from "react";
import {useState} from "react";



const Todoinput = () =>{
    const [inp,setInp] = useState("");


    const postdata=()=>{
        const data = {
            task:inp,
            isCompleted:false
        }
        fetch(`http://localhost:3001/tasks`,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
            "Content-type" : "application/json"
            }
        })
         .then((res)=>{res.json()})
         .then((res)=>console.log(res))
         .catch((err)=>console.log(err))
    }

    return(
        <>
            <h1>Input:</h1>
            <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)} />
            <button onClick={postdata}>Post</button>
        </>
    )
}

export default Todoinput;