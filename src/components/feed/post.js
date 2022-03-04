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
const body={"authorization":token,"title":t,"desc":desc,'skills':'random skill'}
// const h={}
console.log(token)
axios.post("/postproject",body)
.then(response=>console.log(response))
.catch(err=>console.log(err))

}
    
return (
    <>
        <div className="card gedf-card">
                    
                    <div className="card-body">
                        
                    <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className="form-group">
                                    {/* <label className="sr-only" for="message">post</label> */}
                                    <br/>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={tchange}></input>
                                    <br/>
                                    <textarea className="form-control" id="message" rows="1" placeholder="Skills" onChange={cchange}></textarea>
                                    <br/>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="GitHub Link" onChange={tchange}></input>
                                    <br></br>
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
