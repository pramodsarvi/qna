import './post.css';
import { useContext,useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../../context/globalstate';
import axios from 'axios';

function Post(props)
{    const {rtoken,setRtoken,atoken,setAtoken,isauthenticated,setIsauthenticated,message}=useContext(AppContext);
const [title,setTitle]=useState("");
const [comment,setComment]=useState("");
const cchange=(e)=>{setComment(e.target.value)}
const tchange=(e)=>{setTitle(e.target.value)}
const post=()=>{
console.log("post")

const t=title;
const d=comment.replace("'","\'");
const desc=d;
const token=`Bearer ${atoken}`
const body={"authorization":token,"question":t,"desc":desc}
// const h={}
console.log(d)
axios.post("http://localhost:5000/question",body)
.then(response=>console.log(response))
.catch(err=>console.log(err))

}
    
return (
    <>
        <div className="card gedf-card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                
                                <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                    a publication</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                            <label className="btn btn-outline-primary" for="btnradio1">Question</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="btnradio2">Project</label>
                        </div> 
                        <br/>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className="form-group">
                                    {/* <label className="sr-only" for="message">post</label> */}
                                    <br/>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={tchange}></input>
                                    <br/>
                                    <textarea className="form-control" id="message" rows="3" placeholder="What are you thinking?" onChange={cchange}></textarea>
                                    <br/>
                                </div>
                                <div> 
                                    
                                    {/* <label for="formFileMultiple" className="form-label">Images</label> */}
                                    <input className="form-control" type="file" id="formFileMultiple" multiple />
                                    <br/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="btn-toolbar justify-content-between">
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary" onClick={post}>POST</button>
                                <button onClick={()=>{props.cal()}}>Reload</button>

                            </div>
                            <div className="btn-group">
                                <br/>
                                <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="fa fa-globe"></i>
                                </button>
                                <br/>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                   
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
    </>
    );
}
export default Post;


//  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
//   <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
//   <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

//   <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
//   <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>

// </div> 
