import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Modal,Button} from 'react-bootstrap';
import axios from 'axios';
function MyVerticallyCenteredModal(props) {
  const [otp,setOtp]=useState();
  const [password1,setPassword1]=useState();
  const [password2,setPassword2]=useState();
  const otpChange=(e)=>{setOtp(e.target.value)}
  const p1Change=(e)=>{setPassword1(e.target.value)}
  const p2Change=(e)=>{setPassword2(e.target.value)}
  const [message,setMessage]=useState();
  const changepassword=()=>{
    if(password1!==password2)
    {setMessage("Password nnot mathcing ")}
    else{
      // send request to change password
      var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
    const body={"authorization":token,password:password1,otp:otp}
    console.log(body)
    axios.post('http://localhost:5000/api/changePassword',body)
.then((response)=>{}
)
      setMessage()
    }
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You have received a secret code to registered E-mail </h4>
          <p>
            Please check in spam
          </p>
          <form>
          <div class="form-group">
    <label for="exampleInputEmail1">OTP</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="OTP" onChange={otpChange} />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={p1Change}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Repeat Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={p2Change}/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  {message}
  <br/>
  <button type="submit" class="btn btn-primary" onClick={changepassword}>Submit</button>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Chnagepassword() {
    const [modalShow, setModalShow] = useState(false);
    const sendEmail=()=>{
      var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")

    const body={"authorization":token}
    console.log(body)
    axios.post('http://localhost:5000/api/sendEmail',body)
.then((response)=>{}
)
    }
    return (
      <>
        <button  onClick={() => {sendEmail();setModalShow(true)}}>
          Change Password
        </button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default Chnagepassword;