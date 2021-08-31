import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './components/feed/post.css'
function Comment(props)
{
    return(
        <>
             <div className="media">
                       {/* <img className="mr-3 profile" src="download.jfif" alt="Generic placeholder image" /> */}
                       <div className="media-body">
                         <h5 className="mt-0">{"      "+ props.username}</h5>
                         {props.answer}
                       </div>
                       </div> 
        </>
    )
}
export default Comment;