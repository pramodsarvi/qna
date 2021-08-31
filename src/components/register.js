// import { getByTitle } from '@testing-library/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Register()
{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [web,setWeb]=useState("")
    const [git,setGit]=useState("")
    const [insta,setInsta]=useState("")
    const [facebook,setFacebook]=useState("")
    const [desc,setDesc]=useState("")
    const [id,setId]=useState('')
    const [g,setG]=useState('')
    const [password,setPassword]=useState('')
   const [uname,setUname]=useState('')
    const change=(e)=>{setId(e.target.value)}
   const namechange=(e)=>{setName(e.target.value)}
   const mailchange=(e)=>{setEmail(e.target.value)}
   const pchange=(e)=>{setPhone(e.target.value)}
   const webchange=(e)=>{setWeb(e.target.value)}
   const gitchange=(e)=>{setGit(e.target.value)}
   const instachange=(e)=>{setInsta(e.target.value)}
   const fbchange=(e)=>{setFacebook(e.target.value)}
   const deschange=(e)=>{setDesc(e.target.value)}
   const gchange=(e)=>{setG(e.target.value)}
    const passchange=(e)=>{setPassword(e.target.value)}
    const unamechange=(e)=>{setUname(e.target.value)}
    
   const register =()=>
   {
       console.log(name);
       console.log(id);
       console.log(email);
       console.log(phone);
       console.log(web);
       console.log(git);
       console.log(facebook);
       console.log(g);
       console.log(insta);
       console.log(desc);

    //    console.log();
    //    console.log();
   }
   const n=name;
   const i=id;
   const e=email;
   const p=phone;
   const w=web;
   const gi=git;
   const f=facebook;
   const ge=g;
   const ins=insta;
   const dc=desc;
   const dec=dc.replace("'","\'")
const pass=password;
const un=uname;
// const n="name";
// const i=2;
// const e="email@sfsef.com";
// const p=12354984;
// const w="web";
// const gi="git";
// const f="facebook";
// const ge="g";
// const ins="insta";
// const dec="desc";
//    const i=id;
//    const i=id;

const body={"name":n,"username":un,"colid":i,"email":e,"phone":p,"website":w,"facebook":f,"gender":ge,"instagram":ins,"description":dec,"github":gi,"password":pass}
console.log(body)   
axios.post('http://localhost:5000/register',body)
    .then((response)=>{
      console.log(response.data);
    })
    return(
        <>
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
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                            <input type="text" className="form-control form-control-md" id="birthdayDate" placeholder="Birth date"/>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                            <input type="email" id="emailAddress" className="form-control form-control-md" placeholder="E-mail" onChange={mailchange}/>
                        </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                            <input type="email" id="emailAddress" className="form-control form-control-md" placeholder="Gender:M/F/O" onChange={gchange}/>
                        </div>
                        </div>
                        
                    </div>
                    <div className="row">

                        <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                            <input type="tel" id="phoneNumber" className="form-control form-control-md" placeholder="Phone Number" onChange={pchange}/>
                        </div>
                        <br />
                        
                        
                        </div>
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <input type="text" id="firstName" className="form-control form-control-md" placeholder="Github" onChange={gitchange}/>
                        
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
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Website" onChange={webchange}/>  
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

                        <div className="row">
                        <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Instagram" onChange={instachange}/>
                            
                        </div>
                        </div>
                        <div className="col-md-6 mb-4">

                        <div className="form-outline">
                        <input type="text" id="firstName" className="form-control form-control-md" placeholder="FaceBook" onChange={fbchange}/>
                        
                        </div>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell everyone about ypurself" onChange={deschange}></textarea>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Username" onChange={unamechange}/>
                        </div>
                        </div>
                        <div className="form-outline">
                            <div className="col-md-6 mb-4">
                            <label for="">College: </label>
                            <select className="select form-control-md" onChange={change}>
                                <option value="1">East Point College of Engineering and Technology</option>
                                <option value="2">Cambridge Institute of Technology</option>
                                <option value="3">BMS College of Engineering and Technology</option>
                                <option value="4">PES Institute of Technology</option>
                            </select>
                        </div>
                        </div>
                        </div>

                        <div className="mt-4 pt-2">
                            <Link to='/'>
                            <input className="btn btn-primary btn-md" type="submit" value="Submit" onClick={register} />
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