import './post.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function UserInfo(props)
{
    return(
    <>
    {/* {console.log(props.name,props.desc)} */}
    <div class="col-md-3">
    <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                        <div class="mt-3">
                          <h4>{props.name}</h4>
                          <p class="text-secondary mb-1">{props.desc}</p>
                          <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                           {/* <button class="btn btn-primary">Follow</button>
                          <button class="btn btn-outline-primary">Message</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                
                
                {/* <div class="card">
                    <div class="card-body">
                        <div class="h5">@LeeCross</div>
                        <div class="h7 text-muted">Fullname : Miracles Lee Cross</div>
                        <div class="h7">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
                            etc.
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="h6 text-muted">Followers</div>
                            <div class="h5">5.2342</div>
                        </li>
                        <li class="list-group-item">
                            <div class="h6 text-muted">Following</div>
                            <div class="h5">6758</div>
                        </li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div> */}
            </div>
    </>
    );
}
export default UserInfo;