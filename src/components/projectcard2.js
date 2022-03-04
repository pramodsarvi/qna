// import './post.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function ProjectCard2(props)
{
    return(

        <>
          <div className="card gedf-card w-75 p-3 m-2">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
                        {/* <p className="card-text">PROJECT ESCRIPTION  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis consectetur doloribus corrupti aliquid at vel consequatur ullam dolorum laborum..</p> */}
                        <p>Skills: {props.skill}   </p>
                        <a href="#" className="card-link">INTERESTED</a>
                        <a href="#" className="card-link">BLA BLA</a>
                    </div>
                </div>
                <br></br>  
                
        </>
    );
}


export default ProjectCard2;