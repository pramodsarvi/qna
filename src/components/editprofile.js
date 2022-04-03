// import './post.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useContext, useEffect } from 'react';
import {  useSnapshot } from 'valtio';
import state from '../state/state.js';
import Project2 from './projectcard2'
import axios from 'axios';
import Progress from './Progress';
import AppContext from '../context/globalstate';

import {  Navbar, Nav, NavItem,Container, NavDropdown,MenuItem} from 'react-bootstrap';
import ProjectCard2 from './projectcard2';

function Editprofile()
{
  const snap=useSnapshot(state);
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onSubmit = async e => {
    e.preventDefault();
    console.log(file);
    console.log(filename);
    var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('abc', "file");
    // console.log(file)
    formData.append("authorization",token)

    try {

      console.log("formData")
      console.log(formData)

      const res = await axios.post('http://localhost:5000/api/uploadimage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization':token
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
   
    
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };

  const fileChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

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
        .then((response)=>{setName(response.data.data.name);setEmail(response.data.data.email);setDesc(response.data.data.description);setGit(response.data.data.github);})
        .catch(err=>{console.log('error\n');console.log(err)})
      
}
const getmyprojects=()=>{
  var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
  const body={"authorization":token}
  axios.post("http://localhost:5000/api/getmyprojects",body)
        .then((response)=>{setMyprojects(response.data.data)})
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
                        </div>
                  </form>
                  <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={fileChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
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