import { useState,useContext, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Post from './components/feed/post';
import Feed from './components/feed/feed.js';
// import ProjectCard from './components/feed/projectCard';
import {Link} from 'react-router-dom';
import UserInfo from './components/feed/userinfo';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import AppContext from './context/globalstate';
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
    const schange=(e)=>{setSearch(e.target.value)}
    const call=()=>{
        // console.log("FEED")
        const token=`Bearer ${atoken}`
        const body={"authorization":token}
        console.log("Hello there"+process.env.REACT_APP_NODE)
    
        axios.post("http://localhost:5000/userinfo",body)
        .then(response=>{setname(response.data[0].name);setemail(response.data[0].email);setweb(response.data[0].website);
          setdesc(response.data[0].description);setgit(response.data[0].github);setinsta(response.data[0].instagram);setfacebook(response.data[0].facebook)})
          

        //   const body={"authorization":token}

    
        axios.get("http://localhost:5000/feed",body)
        .then((response)=>{setData(response.data);console.log(response.data)})
    console.log(data)
    }
    useEffect(() => {
        // Update the document title using the browser API
    call();
      },[]);
    const postcomment=(id,comment)=>{
        const c=comment
        console.log(c)
        const token=`Bearer ${atoken}`
        const body={"authorization":token,"postid":id,"comment":c}
        // const h={}
        // console.log(body)
        axios.post("http://localhost:5000/comment",body)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        // console.log("Hello there")
      }
    // console.log({rtoken})
    // console.log({isauthenticated})
    if(isauthenticated!=="true")
    {
        return (<>
        <h1>UNAUTHORISED</h1>
        </>);
    }


    return(
    <>
    <div class="container-fluid gedf-wrapper">
        <div class="row">
            <UserInfo name={name} desc={desc}/>
            

            <div class="col-md-6 gedf-main"> 
                <Post cal={call}/>
                {/* <button onClick={call}> Click here</button> */}
                {data && data.map((e)=>{

                    //  console.log(e);
                     return <Feed id={e.qid} name={e.name} title={e.question} description={e.qdescription} post={postcomment}/>
                })
                }
               
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
                            <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" placeholder="Search People" onChange={schange}/>
                            <div class="input-group-append">
                                <Link to='/profile'>
                                <button class="btn btn-outline-primary" type="button" id="button-addon2" >
                                    <FaSearch size={25}/>
                                </button>
                                </Link>
                                    
                            </div>
                        </div>
                    </form>
                {/* <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/> */}

                </div>
                {/* <ProjectCard/>
                <ProjectCard/> */}
                
            </div>
        </div>
    </div>
    </>
        );
}
;
export default FinalFeed;