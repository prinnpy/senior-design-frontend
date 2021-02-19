import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import { Row, Col, Button } from "react-bootstrap";
import ProjectModal from "./ProjectModal";
import db from "../firebase/firebase";
import firebase from "firebase";

const ProjectsContainer = ({ userId, data, isGoToEndpointClicked }) => {
  const [showModal, setShowModal] = useState(false);
  const blankSwaggerDoc = `{"swagger":"2.0","info":{"description":"This is a simple demo server meant to display the features of apigen. ","version":"1.0.5","title":"Senior Design PetStore","contact":{"email":"marcus.gallegos@ucdenver.edu"},"license":{"name":"Apache 2.0"}},"schemes":["https"],"paths":{},"securityDefinitions":{"api_key":{"type":"apiKey","name":"api_key","in":"header"},"petstore_auth":{"type":"oauth2","authorizationUrl":"https://petstore.swagger.io/oauth/authorize","flow":"implicit","scopes":{"read:pets":"read your pets","write:pets":"modify pets in your account"}}},"definitions":{"ApiResponse":{"type":"object","properties":{"code":{"type":"integer","format":"int32"},"type":{"type":"string"},"message":{"type":"string"}}},"Category":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Category"}},"Pet":{"type":"object","required":["name","photoUrls"],"properties":{"id":{"type":"integer","format":"int64"},"category":{"$ref":"#/definitions/Category"},"name":{"type":"string","example":"doggie"},"photoUrls":{"type":"array","xml":{"wrapped":0},"items":{"type":"string","xml":{"name":"photoUrl"}}},"tags":{"type":"array","xml":{"wrapped":0},"items":{"xml":{"name":"tag"},"$ref":"#/definitions/Tag"}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}},"xml":{"name":"Pet"}},"Tag":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"}},"xml":{"name":"Tag"}},"Order":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"petId":{"type":"integer","format":"int64"},"quantity":{"type":"integer","format":"int32"},"shipDate":{"type":"string","format":"date-time"},"status":{"type":"string","description":"Order Status","enum":["placed","approved","delivered"]},"complete":{"type":"boolean"}},"xml":{"name":"Order"}},"User":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"username":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"email":{"type":"string"},"password":{"type":"string"},"phone":{"type":"string"},"userStatus":{"type":"integer","format":"int32","description":"User Status"}},"xml":{"name":"User"}}}}`;

  //have useeffect to add new doc into the api collection
  const addToFirebase = (newProject) => {
    db.collection("api").doc().set(newProject, { merge: true });
  };

  const addProject = (projectName) => {
    //works
    // make object for projectname, userId, and blank swaggerDoc
    const projectObject = {
      projectName: projectName,
      userId: userId,
      swaggerDoc: blankSwaggerDoc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    addToFirebase(projectObject); //add to db
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row style={{ marginBottom: "20px" }}>
        <Col>
          <h1>Projects</h1>
        </Col>
        <Col align="right">
          <Button variant="outline-dark" onClick={() => setShowModal(true)}>
            + Add new projects
          </Button>
        </Col>
      </Row>

      <ProjectModal
        show={showModal}
        onHide={() => setShowModal(false)}
        addProject={addProject}
        title="Adding Project"
        mode="add"
      />

      <hr style={{ marginBottom: "30px" }} />
      {data.map((project) => {
        return (
          <Projects
            project={project}
            isGoToEndpointClicked={isGoToEndpointClicked}
          />
        );
      })}
    </div>
  );
};

export default ProjectsContainer;
