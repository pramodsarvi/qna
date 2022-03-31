// import './post.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useContext, useEffect } from 'react';
import {  useSnapshot } from 'valtio';
import state from '../state/state.js';
import Project2 from './projectcard2'
import axios from 'axios';
import AppContext from '../context/globalstate';

import {  Navbar, Nav, NavItem,Container, NavDropdown,MenuItem} from 'react-bootstrap';
import ProjectCard2 from './projectcard2';

function Editprofile()
{
  const snap=useSnapshot(state);
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
  var to="Bearer ";
  const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
  const token=tok.replace(/["']/g, "")
  const body={"authorization":token}
//         const searchstring=`${searchproject}`;
//         console.log(searchproject)
//         console.log(searchstring+"hi")
// axios.post('/getprojects',body)
// .then((response)=>{setProjectresult(response.data.data)})
}
const getdata=()=>{
  var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
  const body={"authorization":token}
  axios.post("http://localhost:5000/api/userinfo",body)
        .then((response)=>{console.log('GETDATA');console.log(response.data.data);setName(response.data.data.name);setEmail(response.data.data.email);setDesc(response.data.data.description);setGit(response.data.data.github);})
        .catch(err=>{console.log('error\n');console.log(err)})
      
}
const getmyprojects=()=>{
  var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
  const body={"authorization":token}
  axios.post("http://localhost:5000/api/getmyprojects",body)
        .then((response)=>{console.log('MY PROJECTS');console.log(response.data.data);setMyprojects(response.data.data)})
        .catch(err=>{console.log('error\n');console.log(err)})
}
const update=()=>{
  var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
    const body={"authorization":token,name:name,email:email,description:desc,github:git}
axios.post('http://localhost:5000/api/updateprofile',body)
.then((response)=>{console.log(response)}


)

}
  useEffect(() => {
    // Update the document title using the browser API
    call();
    getdata();
    getmyprojects();
  },[]);
  const logout=()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
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
      </Nav>
      <Nav pullRight>
      {/* <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/edit">Change Password</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/" onClick={logout}>LogOut</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
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
                            <input type="text" id="firstName" className="form-control form-control-md" placeholder="Name" onChange={namechange} value={name}/>
                        </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <input type="email" id="emailAddress" className="form-control form-control-md" placeholder="E-mail" onChange={mailchange} value={email}/>
                        </div>
                        </div>
                    </div>
                    
                    <div className="row">

                        <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Description" onChange={deschange} value={desc}></textarea>
                        </div>
                        <br />
                        
                        
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                        <input type="text" id="firstName" className="form-control form-control-md" placeholder="Github" onChange={gitchange} value={git}/>
                        
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
                            <button className="btn btn-primary btn-md" type="submit" value="Update" onClick={update}  >Update</button>
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
<div class="d-flex justify-content-center row ">
                {myprojects && myprojects.map((e)=>{
                    return <ProjectCard2 id={e._id} title={e.title} name={e.name} skill={e.skills} git={e.github} />
                })
                }

    </div>
        </>
    );
};


export default Editprofile;