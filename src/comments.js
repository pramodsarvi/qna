import Comment from './comment';
import { useState,useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './post.css';
import axios from 'axios'
// import AppContext from '../../context/globalstate';
// import axios from 'axios';
function Comments(props)
{
    const [data,setData]=useState()
    const calll=()=>{
        const id=props.id;
        const body={"id":id}
        console.log(body)
    axios.post("/cmnt",body)
    .then(response=>{setData(response.data)})
    .catch(err=>console.log(err))
    }
    useEffect(() => {
        calll();
        // return () => {
        //     cleanup
        // }
    }, [])
    return(<>
        {
                   data && data.map((e)=>{ return <Comment username={e.username} answer={e.answer} /> })
        }
                         
    </>);
}
export default Comments;
