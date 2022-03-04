import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect,useContext } from 'react';
import Comments from '../../comments';
import './post.css';
import axios from 'axios'
import AppContext from '../../context/globalstate';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { comment } from 'postcss';

function Feed(props)
{    const {rtoken,setRtoken,atoken,setAtoken,isauthenticated,setIsauthenticated,message}=useContext(AppContext);
const [comment,setComment]=useState('')
  const [display, setDisplay] =useState("none");
    const change=(e)=>{setComment(e.target.value)}   

//   const postcomment=(id)=>{
//     const token=`Bearer ${atoken}`
//     const c=comment
//     console.log(c)
//     const body={"authorization":token,"postid":id,"comment":c}
//     // const h={}
//     console.log(body)
//   }


    // axios.post("/comment",body)
    // .then(response=>console.log(response))
    // .catch(err=>console.log(err))
    // console.log("Hello there")
  
    return(
    <>      
           <div className="card gedf-card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                    <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0">{props.name}</div>
                                    <div className="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        {/* <div className="h6 dropdown-header">Configuration</div>
                                        <a className="dropdown-item" href="#">Save</a>
                                        <a className="dropdown-item" href="#">Hide</a>
                                        <a className="dropdown-item" href="#">Report</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>10 min ago</div>
                        <a className="card-link">
                            <h5 className="card-title">{props.title}</h5>
                        </a>

                        <p className="card-text">
                            {props.description}
                        </p>
                        {/* <img src="Capture.JPG" className="img-fluid" alt="Responsive image"/> */}
                    </div>
                    <div className="card-footer container">
                        <div className="row">
                            <div className="col"><a><AiOutlineLike></AiOutlineLike></a></div>
                            <div className="col"><a><FaCommentAlt  onClick={()=>{setDisplay("inline");}} /></a></div>
                            <div className="col"><a><FaShare /></a></div>
                            
                            {/* <div className="col"><button ><FaChevronDown onClick={()=>{setDisplay("inline");console.log("Down");}}/></button></div> */}
                            <div className="col"><button onClick={()=>{setDisplay("none");}}><FaAngleUp /></button></div>
                        </div>
                    </div>
                    <div  className="card-footer  d-flex justify-content-center row  " >
                        {/* <!-- <div>
                            <p>No Comments..</p>
                        </div> --> */}
                        <br/>
                        <div className="row" style={{display:display}} >
                            <div>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Comment" rows="3" onChange={change}></textarea><br/>
                                <button type="button" class="btn btn-primary" onClick={()=>{props.post(props.id,comment)}}>Post</button>
                                <br/>
                            </div>
                        <br/>
                        <br/>
                        {/* <div > */}
                            <Comments id={props.id} />
                               
                        {/* </div> */}
                        </div>
                    </div>
                </div>
                <br/>
    </>
    );
}
export default Feed;

