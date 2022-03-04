import {  Navbar, Nav, NavItem,Container, NavDropdown,MenuItem} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Changepassword from '../components/changepassword'

function NewNavbar()
{
    return(<>
    
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Skill-Connect</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Nav pullRight>
      <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="#" ><Changepassword /></NavDropdown.Item>
          <NavDropdown.Item href="/edit">Edit Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">LogOut</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>);
}
export default NewNavbar;