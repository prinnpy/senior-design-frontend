import React from "react";
import { Modal } from "react-bootstrap";
import MyForm from "./MyForm";

const MyModal = (props) => {
  const initValues = {
    requestType: props.requestType,
    endpointName: props.endpointName,
    summary: props.summary,
    operationID: props.operationId,
  };
  const {fns} = props;
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
        <MyForm
          onHide={props.onHide}
          addEndpoint={props.addEndpoint}
          editEndpoint={props.editEndpoint}
          mode={props.mode}
          initValues={initValues}
          projectId={props.apiId}
          fns={fns}


        />
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
