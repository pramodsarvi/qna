import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
function user(props)
{
    return(
        <>
         <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>{props.name}</h4>
                      <p class="text-secondary mb-1">{props.desc}</p>
                      <p class="text-secondary mb-1">{props.git}</p>
                      <p class="text-secondary mb-1">{props.email}</p>
                    </div>
                  </div>
                </div>
              </div>
             
        </>
    );
}


export default user;