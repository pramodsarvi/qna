import { useState,useContext, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Post from './components/feed/post';
import Feed from './components/feed/feed.js';
import User from './components/profile/user'

// import ProjectCard from './components/feed/projectCard';
import NewNavbar from './components/NewNavbar'
import Projects from './components/feed/projectCard'
import UserInfo from './components/feed/userinfo';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import AppContext from './context/globalstate';
import Login from './components/login';
function FinalFeed()
{
    const {rtoken,setRtoken,atoken,setAtoken,isauthenticated,setIsauthenticated,search,setSearch,message}=useContext(AppContext)
    const [data,setData]=useState();    
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [web, setweb] = useState()
    const [desc, setdesc] = useState()
    const [git, setgit] = useState()
    const [insta, setinsta] = useState()
    const [facebook, setfacebook] = useState()
    const [searchproject, setSearchproject] = useState('');
    const [projectresult, setProjectresult] = useState();
    const [usersresp, setUserresp] = useState();
    const [userChange,setUserchange]=useState();
    const searchp=(e)=>{setSearchproject(e.target.value)}
    const schange=(e)=>{setSearch(e.target.value)}
    
    
    const projsearch=()=>{
        const token=`Bearer ${atoken}`;
        const searchstring=`${searchproject}`;
        console.log(searchproject)
        console.log(searchstring+"hi")
    const body={"authorization":token,search:searchstring}
axios.post('/getprojects',body)
.then((response)=>{setProjectresult(response.data.data)}
)

}
const suchange=(e)=>{setUserchange(e.target.value)}

const searchuser=()=>{ const token=`Bearer ${atoken}`
    const body={"authorization":token,name:`${userChange}`}
    axios.post('/user',body).then((response)=>{setUserresp(response.data.data)})
 }


    const call=()=>{
        // console.log("FEED")
        const token=`Bearer ${atoken}`
        const body={"authorization":token}
        console.log("Hello there"+process.env.REACT_APP_NODE)
    
        // axios.post("/userinfo",body)
        // .then((response)=>{;console.log(response);setname(response.data[0].name);setemail(response.data[0].email);setweb(response.data[0].website);setdesc(response.data[0].description);setgit(response.data[0].github);setinsta(response.data[0].instagram);setfacebook(response.data[0].facebook)})
        // .catch(err=>{console.log('error\n');console.log(err)})
        

        //   const body={"authorization":token}

    
        axios.post("/feed",body)
        .then((response)=>{console.log(response);setData(response.data);console.log(response.data)})
        .catch((err)=>{console.log(err)})
        console.log(data)
    }
    useEffect(() => {
        // Update the document title using the browser API
        console.log("aaaaaaaaaaaaaaaaaaaaa"+atoken)
    call();
      },[]);
    const postcomment=(id,comment)=>{
        const c=comment
        console.log(c)
        const token=`Bearer ${atoken}`
        const body={"authorization":token,"postid":id,"comment":c}
        // const h={}
        // console.log(body)
        axios.post("/comment",body)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        // console.log("Hello there")
      }
    // console.log({rtoken})
    // console.log({isauthenticated})
    if(window.sessionStorage.getItem("QnAAToken")==null)
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
    {localStorage.getItem('token')+'HI'}
    <div class="container-fluid gedf-wrapper">
        <div class="row">
            <UserInfo name={name} desc={desc}/>
            

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
     return <User name={e.name} />
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
                    return <Projects title={e.title} name={e.name} skill={e.skills} description={e.qdescription} post={postcomment}/>
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