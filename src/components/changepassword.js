import { useState,useContext, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Navbar,Modal,Button, Nav, NavItem,Container, NavDropdown,MenuItem} from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You have received a secret code to registered E-mail </h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Chnagepassword() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <button style={{padding: "0"},{border: "none"},{background: "none"}} onClick={() => setModalShow(true)}>
          Change Password
        </button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default Chnagepassword;