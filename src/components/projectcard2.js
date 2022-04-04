// import './post.css';
import axios from 'axios';
import { useState } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function ProjectCard2(props)
{
  const [display,setDisplay]=useState("block")
    const deleteproject=()=>{
        var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
  const body={"authorization":token,projectid:props.id}
  axios.post("http://localhost:5000/api/deleteproject",body)
        .then((response)=>{setDisplay('None')})
        .catch(err=>{console.log('error\n');console.log(err)})
    }
    return(

        <>
          <div className="card gedf-card w-25 p-3 m-2" style={{display:{display}}} >
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
                        {/* <p className="card-text">PROJECT ESCRIPTION  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis consectetur doloribus corrupti aliquid at vel consequatur ullam dolorum laborum..</p> */}
                        <p>Skills: {props.skill}   </p>
                        <button onClick={deleteproject}>DELETE</button>
                    </div>
                </div>
                <br></br>  
                
        </>
    );
}


export default ProjectCard2;