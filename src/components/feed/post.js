import './post.css';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Post(props)
{    
const [title,setTitle]=useState("");
const [git,setGit]=useState("");
const [skill,setSkill]=useState("");
const changeGit=(e)=>{setGit(e.target.value)}
const changeTitle=(e)=>{setTitle(e.target.value)}
const changeSkill=(e)=>{setSkill(e.target.value)}
const post=()=>{
console.log("post")
const t=title;
const d=skill.replace("'","'");
const desc=d;
const token=`Bearer ${localStorage.getItem('accessToken')}`;
const body={"authorization":token,"title":t,"skills":desc,'github':git}
console.log(token)
axios.post("/postproject",body)
.then(response=>{setTitle();setGit();setSkill()})
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
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder='Title' onChange={changeTitle} value={title}></input>
                                    <br/>
                                    <textarea className="form-control" id="message" rows="1" placeholder='Skill' onChange={changeSkill} value={skill}></textarea>
                                    <br/>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder='Git' onChange={changeGit} value={git}></input>
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

