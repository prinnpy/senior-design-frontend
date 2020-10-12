import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import firebaseService from './firebaseService';

function App() {


  

  let data = firebaseService.getData();
  
  return (

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">API Builder</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">View</Nav.Link>
      <Nav.Link href="#features">Edit</Nav.Link>
    </Nav>
  </Navbar>

  );
}

export default App;
