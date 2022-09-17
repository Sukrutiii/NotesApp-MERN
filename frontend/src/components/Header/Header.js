import React, { useEffect } from "react";
import {Container,Form,FormControl,Nav,Navbar,NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = ({setSearch}) => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
    
  };

  useEffect(() => {}, [userInfo]);
  
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">NotesApp</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <nav className='m-auto'>
          <Form inline>
            <FormControl type='text' 
                         placeholder='Search'
                         className='mr-sm-2' 
                         onChange={(e) => setSearch(e.target.value)}
                         />
          </Form>
          </nav>
          {userInfo ? (<Nav>
            <Nav.Link href="/mynotes">
              <Link to="/mynotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                onClick={logoutHandler}
                
              >Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>):
          (<Nav>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
