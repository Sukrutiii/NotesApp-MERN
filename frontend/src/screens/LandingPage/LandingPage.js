
import React, {useEffect} from 'react';
import { Button, Container,Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {

  const navigate = useNavigate();
    
    useEffect(() => {
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        navigate("/mynotes");
      }
    }, []);
  
  return (
    <div className='main'>
      <Container>
        <Row>
         <div className="intro-text">
            <div>
              <h1 className="title">Welcome to NotesApp</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className='buttonContainer'>
               <Link to='/login'>
                <Button size='lg' className='landingbutton' variant='outline-primary'>Login</Button>
               </Link>
               <Link to='/register'>
                <Button size='lg' className='landingbutton' >Signup</Button>
               </Link>
            </div>
          </div>  
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
