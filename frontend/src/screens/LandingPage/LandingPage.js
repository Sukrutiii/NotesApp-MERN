import React, {useEffect} from 'react';
import { Button, Container,Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
               <a href='/login'>
                <Button size='lg' className='landingbutton'>Login</Button>
               </a>
               <a href='/register'>
                <Button size='lg' className='landingbutton' variant='outline-primary'>Signup</Button>
               </a>
            </div>
          </div>  
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
