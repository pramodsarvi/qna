import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Post from './components/feed/post';
import User from './components/profile/user'

// import ProjectCard from './components/feed/projectCard';
import NewNavbar from './components/NewNavbar'
import Projects from './components/feed/projectCard'
import UserInfo from './components/feed/userinfo';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import Login from './components/login';
function FinalFeed()
{    
    const [name, setname] = useState()
    const [desc, setdesc] = useState()
    const [git, setgit] = useState()
    
    const [searchproject, setSearchproject] = useState('');
    const [projectresult, setProjectresult] = useState();
    const [usersresp, setUserresp] = useState();
    const [userChange,setUserchange]=useState();
    const searchp=(e)=>{setSearchproject(e.target.value)}
    const [imgurl,setImgurl]=useState();

    
    
    const projsearch=()=>{
        var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
        const searchstring=`${searchproject}`;
        console.log(searchproject)
        console.log(searchstring+"hi")
    const body={"authorization":token,search:searchstring}
    console.log(body)
    axios.post('http://13.233.4.104:5000/api/getprojects',body)
.then((response)=>{setProjectresult(response.data.data)}
)

}
const suchange=(e)=>{setUserchange(e.target.value)}

const searchuser=()=>{ 
    var to="Bearer ";
    const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
    const token=tok.replace(/["']/g, "")
    const body={"authorization":token,name:`${userChange}`}
    axios.post('http://13.233.4.104:5000/api/user',body).then((response)=>{setUserresp(response.data.data)})
 }


    const call=()=>{
        console.log("FEED")
        console.log(JSON.parse(localStorage.getItem('accessToken')));
        var to="Bearer ";
        const tok=to.concat(JSON.parse(localStorage.getItem('accessToken')));
        const token=tok.replace(/["']/g, "")
        console.log(token)
        // const token=`Bearer ${sessionStorage.getItem('accessToken')}`
        const body={"authorization":token};
        // console.log("Hello there"+process.env.REACT_APP_NODE)
        axios.post("http://13.233.4.104:5000/api/userinfo",body)
        .then((response)=>{;setImgurl(response.data.data.profile_pic);console.log(response.data.data);setname(response.data.data.name);setdesc(response.data.data.description);setgit(response.data.data.github)})
        .catch(err=>{console.log('error\n');console.log(err)})
        

        //   const body={"authorization":token}
        // console.log(token)
    
        // axios.post("/feed",body)
        // .then((response)=>{console.log(response);setData(response.data);console.log(response.data)})
        // .catch((err)=>{console.log(err)})
        // console.log(data)
    }
    useEffect(() => {
        // Update the document title using the browser API        
        call();
        // console.log("aaaaaaaaaaaaaaaaaaaaa"+atoken)
        // console.log(snap.rtoken)
        // const rt=snap.rtoken;
        // const at=snap.atoken;
        // state.rtoken=rt;
        // state.atoken=at;
        console.log("sessionStorage.getItem('accessToken')")
        console.log(sessionStorage.getItem('accessToken'))
      },[]);
    const postcomment=(id,comment)=>{
        const c=comment
        console.log(c)
        // const h={}
        // // console.log(body)
        // axios.post("/comment",body)
        // .then(response=>console.log(response))
        // .catch(err=>console.log(err))
        // console.log("Hello there")
      }
    // console.log({rtoken})
    // console.log({isauthenticated})
    if(sessionStorage.getItem('isAuth')==="false")
    {
        return (<>
        <Login></Login>
        </>);
    }


    return(
    <>
<br></br>
    <NewNavbar></NewNavbar>
    <br></br>
    <div class="container-fluid gedf-wrapper">
        <div class="row">
            <UserInfo name={name} desc={desc} git={git} url={imgurl}/>
            

            <div class="col-md-6 gedf-main"> 
                <Post cal={call}/>
                {/* <button onClick={call}> Click here</button> */}
                
                {/* {data && data.map((e)=>{

                    //  console.log(e);
                     return <Feed id={e.qid} name={e.name} title={e.question} description={e.qdescription} post={postcomment}/>
                })
                } */}
               
                {/* <Feed/>
                <Feed/>
                <Feed/>
                <Feed/> */}
                
            </div>
            <div class="col-md-3">
            {/* <ProjectCard/> */}
                <div class="">
                    <form class="form-inline">
                        <div class="input-group">
                            <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" placeholder="Search People" onChange={suchange}/>
                            <div class="input-group-append">
                                
                                <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={searchuser} >
                                    <FaSearch size={25}/>
                                </button>
                                
                                    
                            </div>
                        </div>
                    </form>
                {usersresp && usersresp.map((e)=>{
     return <User name={e.name} desc={e.description} git={e.github} email={e.email}/>
     })
     }
                    <div>

                    </div>
                    
                   

                {/* <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/> */}

                </div>
                {/* <ProjectCard/>
                <ProjectCard/> */}
                
        
            </div>
        </div>

    </div>
    <div class="d-flex justify-content-center">
        <form class="form-inline">
                            <div class="input-group">
                                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" id='search_project' placeholder="Search by skill" onChange={searchp} />
                                <div class="input-group-append">
                                   
                                    <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={projsearch} >
                                        <FaSearch size={25}/>
                                    </button>
                                        
                                </div>
                            </div>
        </form>

    </div>
    <br></br>
    <div class="d-flex justify-content-center row ">
                {projectresult && projectresult.map((e)=>{

                    //  console.log(e);
                    return <Projects id={e.id} title={e.title} name={e.name} skill={e.skills} git={e.github} post={postcomment}/>
                })
                }

    </div>
    </>
        );
}
;
export default FinalFeed;

// {usersresp && usersresp.map((e)=>{
//     return <Userinfo name={e.name} />
//     })
//     }