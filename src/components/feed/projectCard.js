// import './post.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function ProjectCard(props)
{
    return(

        <>
          <div className="card gedf-card w-25 p-3 m-2">
                    <div className="card-body">
                        {/* <h5 className="card-title">{props.title}</h5> */}
                        <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
                        <p>Skills: {props.skill}   </p>
                        <p>Git :{props.git}</p>
                        {/* <a href="#" className="card-link">BLA BLA</a> */}
                    </div>
                </div>
                <br></br>  
                
        </>
    );
}


export default ProjectCard;