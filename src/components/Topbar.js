import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import firebase from "firebase";

const Topbar = ({userName}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">API Builder</Navbar.Brand>
      <Nav className="ml-auto">
        <Navbar.Text className="mr-3">
          Sign in as: {userName}
        </Navbar.Text>
        <Button variant="outline-secondary" onClick={() => firebase.auth().signOut()}>Sign out</Button>
      </Nav>
    </Navbar>
  );
};

export default Topbar;
