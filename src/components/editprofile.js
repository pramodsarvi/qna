// import './post.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useContext, useEffect } from 'react';
import Project2 from './projectcard2'
import axios from 'axios';
import AppContext from '../context/globalstate';

import {  Navbar, Nav, NavItem,Container, NavDropdown,MenuItem} from 'react-bootstrap';

function Editprofile()
{
  const {rtoken,setRtoken,atoken,setAtoken,isauthenticated,setIsauthenticated,search,setSearch,message}=useContext(AppContext)

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
   const [myprojects,setMyprojects]=useState()

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

const call=()=>{
  const token=`Bearer ${atoken}`;
  const body={"authorization":token}
    axios.post('/getmyprojects',body).then((response)=>{console.log('GetMyProjects');console.log(response);setMyprojects(response)})
    .catch((error)=>{console.log(atoken);console.log(error)})
}
  useEffect(() => {
    // Update the document title using the browser API
    call();
    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE\n")
    console.log(atoken)
  },[]);
    return(

        <>
          <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link href="/feed">Home</Nav.Link>
        <Nav.Link href="#link">Search People</Nav.Link>
      </Nav>
      <Nav pullRight>
      <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/edit">Change Password</NavDropdown.Item>
          <NavDropdown.Item href="/edit">Edit Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    <br></br>
    <div>
    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{bordeRradius: "15px"}}>
                <div className="card-body p-4 p-md-5">
                    <div className="d-flex justify-content-center align-items-center">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Edit Profile</h3>
                    </div>
                  <form>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Name" onChange={namechange}/>
                        </div>
                        </div>
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline">
                            <input type="email" id="emailAddress" className="form-control form-control-md" placeholder="E-mail" onChange={mailchange}/>
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
                            {/* <input type="text" id="firstName" className="form-control form-control-md" placeholder="E-mail"/> */}
                            
                        </div>
                        </div>
                        
                        </div>

                        <div className="mt-4 pt-2">
                            {/* <Link to='/'> */}
                            <input className="btn btn-primary btn-md" type="submit" value="Update"  />
                            {/* </Link> */}
                            {atoken}
                        </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
        </>
    );
};


export default Editprofile;