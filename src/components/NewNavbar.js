import {  Navbar, Nav,Container, NavDropdown} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Changepassword from '../components/changepassword'

function NewNavbar()
{
  const logout=()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
    return(<>
    
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Skill-Connect</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
      </Nav>
      <Nav pullRight>
      <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="#" ><Changepassword /></NavDropdown.Item>
          <NavDropdown.Item href="/edit">Edit Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/"onClick={logout}>LogOut</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>);
}
export default NewNavbar;