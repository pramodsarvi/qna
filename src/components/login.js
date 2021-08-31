import './login.css'
import { useEffect, useState,useContext } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AppContext from '../context/globalstate';
function Login() {
  const {rtoken,setRtoken,atoken,setAtoken,isauthenticated,setIsauthenticated,search,setSearch,message}=useContext(AppContext)
  // console.log({rtoken})
  useEffect(() => {
    // const subscription = props.source.subscribe();
    return () => {
      // Clean up the subscription
      // subscription.unsubscribe();
    };
  },[]);
  //   const [rtoken,setRtoken]=useState('')
  // const [atoken,setAtoken]=useState('')
  // const [isauthenticated,setIsauthenticated]=useState('false');
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  
  
  const uchange=(e)=>{setUsername(e.target.value)}
  const pchange=(e)=>{setPassword(e.target.value)}
  const login=async ()=>{
    // setUsername('req.body.username')
    // setPassword('req.body.password')
    const a=username;
    const b=password;
    // console.log(a)
    const body={"username":a,"password":b}
    axios.post('http://localhost:5000/login',body)
    .then((response)=>{
      setIsauthenticated("true");
      setRtoken(response.data.refreshToken);
      setAtoken(response.data.accessToken);
      console.log(response.data);
    })
    .catch(err=>setIsauthenticated('false'))
    // .then()
  }
  // console.log({rtoken})

return (
 <>
  <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={uchange}/>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={pchange}/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
  
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                  <label className="form-check-label" htmlFor="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <Link to='/feed'>
                  <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={login}>Sign
                    in</button>
                  </Link>
                </div>
                <hr className="my-4"/>
                <div className="d-grid mb-2">
                  <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                    <i className="fab fa-google me-2"></i> Sign in with Google
                  </button>
                </div>
                <div className="d-grid">
                  <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                    <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                  </button>
                  <p>{username}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
 </>
            );
}
            export default Login;