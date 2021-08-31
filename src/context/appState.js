import React ,{useState}from 'react';
import AppContext from './globalstate';
const AppState=(props)=>{
    const [rtoken,setRtoken]=useState('')
    const [atoken,setAtoken]=useState('')
    const [isauthenticated,setIsauthenticated]=useState('false');

    const [search,setSearch]=useState('');
    // const [username,setUsername]=useState('')
    // const [password,setPassword]=useState('')
    return(
        <AppContext.Provider value={{rtoken,setRtoken,atoken,setAtoken,
        isauthenticated,setIsauthenticated,search,setSearch,message:"Hello There"}}>
            {props.children}
        </AppContext.Provider>
    );
}
export default AppState;