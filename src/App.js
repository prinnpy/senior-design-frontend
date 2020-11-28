import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PathsContainer from './PathsContainer';
import firebase from './firebase';



function App() {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(
    () => {
      const getData = firebase
        .firestore()
        .collection('test')
        .doc('petStore')
        .onSnapshot(
          doc => {
            setLoading(false);
            setData(JSON.parse(doc.data().data))
          },
          err => {
            setError(err)
          }
        )
      return() => getData();
    }, []);


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">API Builder</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">View</Nav.Link>
          <Nav.Link href="#features">Edit</Nav.Link>
        </Nav>
      </Navbar>

      <Jumbotron>
        <h1 style={{ fontSize: '50px', color: 'black' }}>Petstore API</h1>
        <p>This is Perstore server. Running live.</p>
        <div>
          <a href="/">Terms of Services</a> <br />
          <a href="/">Contact the developer</a>
        </div>
      </Jumbotron>

      {data.swagger && <PathsContainer tags={data.tags} paths={data.paths}/>}
      
    </div>



  );
}

export default App;
