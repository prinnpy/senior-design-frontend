import React from "react";
import { Modal } from "react-bootstrap";
import ProjectForm from "./ProjectForm";

const MyModal = (props) => {
  const initValues = {
    projectName: props.projectName
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProjectForm
          onHide={props.onHide}
          addProject={props.addProject}
          editProject={props.editProject}
          mode={props.mode}
          initValues={initValues}
        />
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
