import './login.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState,useContext } from 'react';
import {  useHistory} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './navbar'
import AppContext from '../context/globalstate';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Login() {
  const history = useHistory();
  const {setRtoken,setAtoken,setIsauthenticated}=useContext(AppContext)
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
  const login=async (e, path)=>{
    
    e.preventDefault()
    // setUsername('req.body.username')
    // setPassword('req.body.password')
    const a=username;
    const b=password;
    // console.log(a)
    const body={"username":a,"password":b}
    axios.post('http://13.233.4.104:5000/login',body)
    .then((response)=>{
      console.log("login")
      setIsauthenticated("true");
      setRtoken(response.data.refreshToken);
      setAtoken(response.data.accessToken);
      localStorage.setItem('accessToken',JSON.stringify(response.data.accessToken));
      localStorage.setItem('refreshToken',JSON.stringify(response.data.accessToken));
      console.log(JSON.parse(localStorage.getItem('accessToken')));
    })
    .catch(err=>setIsauthenticated('false'))
    // .then()
    setTimeout(() =>history.push(path), 3000);

  }
  // console.log({rtoken})

return (
 <>
 <Nav />
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
                  {/* <Link to='/feed'> */}
                  <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={(e)=>{login(e, "/feed")}}>Sign
                    in</button>
                  {/* </Link> */}
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
                  <p></p>
                </div>
              </form>
              <Link to='/register'>
              <button >Register aaaaaaaaaaaaaaaHere</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />

 </>
            );
}
            export default Login;


        //     <div>

        //     <section class="vh-100">
        //   <div class="container-fluid h-custom">
        //     <div class="row d-flex justify-content-center align-items-center h-100">
        //       <div class="col-md-9 col-lg-6 col-xl-5">
        //         {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" ></img> */}
        //       </div>
        //       <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        //         <form>
        //           <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
        //             <p class="lead fw-normal mb-0 me-3">Sign in with</p>
        //             <button type="button" class="btn btn-primary btn-floating mx-1">
        //               <i class="fab fa-facebook-f"></i>
        //             </button>
        
        //             <button type="button" class="btn btn-primary btn-floating mx-1">
        //               <i class="fab fa-twitter"></i>
        //             </button>
        
        //             <button type="button" class="btn btn-primary btn-floating mx-1">
        //               <i class="fab fa-linkedin-in"></i>
        //             </button>
        //           </div>
        
        //           <div class="divider d-flex align-items-center my-4">
        //             <p class="text-center fw-bold mx-3 mb-0">Or</p>
        //           </div>
        
        //           {/* <!-- Email input --> */}
        //           <div class="form-outline mb-4">
        //             <input type="email" id="form3Example3" class="form-control form-control-lg"
        //               placeholder="Enter a valid email address" />
        //             <label class="form-label" for="form3Example3">Email address</label>
        //           </div>
        
        //           {/* <!-- Password input --> */}
        //           <div class="form-outline mb-3">
        //             <input type="password" id="form3Example4" class="form-control form-control-lg"
        //               placeholder="Enter password" />
        //             <label class="form-label" for="form3Example4">Password</label>
        //           </div>
        
        //           <div class="d-flex justify-content-between align-items-center">
        //             {/* <!-- Checkbox --> */}
        //             <div class="form-check mb-0">
        //               <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
        //               <label class="form-check-label" for="form2Example3">
        //                 Remember me
        //               </label>
        //             </div>
        //             <a href="#!" class="text-body">Forgot password?</a>
        //           </div>
        
        //           <div class="text-center text-lg-start mt-4 pt-2">
        //             <button type="button" class="btn btn-primary btn-lg"
        //               style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
        //             <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
        //                 class="link-danger">Register</a></p>
        //           </div>
        
        //         </form>
        //       </div>
        //     </div>
        //   </div>
        //   <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        //     {/* <!-- Copyright --> */}
        //     <div class="text-white mb-3 mb-md-0">
        //       Copyright © 2020. All rights reserved.
        //     </div>
        //     {/* <!-- Copyright --> */}
        
        //     {/* <!-- Right --> */}
        //     <div>
        //       <a href="#!" class="text-white me-4">
        //         <i class="fab fa-facebook-f"></i>
        //       </a>
        //       <a href="#!" class="text-white me-4">
        //         <i class="fab fa-twitter"></i>
        //       </a>
        //       <a href="#!" class="text-white me-4">
        //         <i class="fab fa-google"></i>
        //       </a>
        //       <a href="#!" class="text-white">
        //         <i class="fab fa-linkedin-in"></i>
        //       </a>
        //     </div>
        //     {/* <!-- Right --> */}
        //   </div>
        // </section>
        //     </div>
        