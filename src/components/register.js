// import { getByTitle } from '@testing-library/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar'
function Register()
{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [web,setWeb]=useState("")
    const [git,setGit]=useState("")
    const [password,setPassword]=useState('')
   const namechange=(e)=>{setName(e.target.value)}
   const mailchange=(e)=>{setEmail(e.target.value)}
   const webchange=(e)=>{setWeb(e.target.value)}
   const gitchange=(e)=>{setGit(e.target.value)}
    const passchange=(e)=>{setPassword(e.target.value)}
    
   const register =()=>
   {
   const n=name;
   const e=email;
   const w=web;
   const gi=git;
const pass=password;
const body={"name":n,"email":e,"website":w,"github":gi,"password":pass}
console.log(body)   
axios.post('http://localhost:5000/register',body)
    .then((response)=>{
      console.log(response.data);
    })
}
    return(
        <>
        <div>
            <Nav></Nav>
        </div>
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{bordeRradius: "15px"}}>
                <div className="card-body p-4 p-md-5">
                    <div className="d-flex justify-content-center align-items-center">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Register</h3>
                    </div>
                  <form>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Name" onChange={namechange}/>
                        </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                            <input type="email" id="emailAddress" className="form-control form-control-md" placeholder="E-mail" onChange={mailchange}/>
                        </div>
                        </div>
                    </div>
                    
                    <div className="row">

                        
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <input type="text" id="firstName" className="form-control form-control-md" placeholder="Github" onChange={gitchange}/>
                        
                        </div>
                        </div>
                        <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Website" onChange={webchange}/>  
                        </div>
                        </div>
                    </div>
                        <div className="row">
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Password" onChange={passchange}/>  
                        </div>
                        </div>
                        <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Repeat Password" onChange={webchange}/>  
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            {/* <input type="text" id="firstName" className="form-control form-control-md" placeholder="E-mail"/> */}
                            
                        </div>
                        </div>
                        
                        </div>
                        
                        <div className="d-grid ">
                  <button className="btn-primary btn-login text-uppercase fw-bold" onClick={register}>
                    Register
                  </button>
                </div>
                <br></br>
                <div className="d-grid">
                  <Link to='/'>
                  <button className="btn-primary btn-login text-uppercase fw-bold" >
                    LogIn
                  </button>
                  </Link>
                </div>
                  </form>
                </div>
                
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
     
        </>
    );
}

export default Register;