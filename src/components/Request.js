import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import MyModal from "./MyModal";

const Request = (props) => {
  const {
    path,
    request,
    requestSummary,
    operationId,
    deleteEndpoint,
    editEndpoint,
    projectId,
    fns
  } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <Card style={{ marginBottom: "20px", border: "none" }}>

      {request === "post" && (
        <div>
          <Card.Header
            as="h5"
            style={{
              backgroundColor: "#49CC90",
              color: "#fff",
              border: "none",
            }}
          >
            {request}{" "}
          </Card.Header>
          <Card.Body
            style={{
              backgroundColor: "#E8F6F0",
              border: "1px solid #49CC90",
            }}
          >
            <Card.Title>{path}</Card.Title>
            <Card.Text>{requestSummary}</Card.Text>
          </Card.Body>
          <Card.Footer
            style={{
              border: "1px solid #49CC90",
              borderTop: "none",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <Button
              variant="secondary"
              style={{ marginRight: "10px" }}
              onClick={() => setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg> Edit
            </Button>

            <MyModal
              show={showModal}
              onHide={() => setShowModal(false)}
              editEndpoint={editEndpoint}
              title="Editing Endpoint"
              mode="edit"
              endpointName={path}
              requestType={request}
              summary={requestSummary}
              operationId={operationId}
              apiId={projectId }
              fns={fns}
            />
            <Button
              variant="danger"
              onClick={() => deleteEndpoint(path, request, operationId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg> Delete
            </Button>
          </Card.Footer>
        </div>
      )}
      {request === "put" && (
        <div>
          <Card.Header
            as="h5"
            style={{
              backgroundColor: "#FCA130",
              color: "#fff",
              border: "none",
            }}
          >
            {request}{" "}
          </Card.Header>
          <Card.Body
            style={{
              backgroundColor: "#FBF1E6",
              border: "1px solid #FCA130",
            }}
          >
            <Card.Title>{path}</Card.Title>
            <Card.Text>{requestSummary}</Card.Text>
          </Card.Body>
          <Card.Footer
            style={{
              border: "1px solid #FCA130",
              borderTop: "none",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <Button
              variant="secondary"
              style={{ marginRight: "10px" }}
              onClick={() => setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg> Edit
            </Button>
            <MyModal
              show={showModal}
              onHide={() => setShowModal(false)}
              editEndpoint={editEndpoint}
              title="Editing Endpoint"
              mode="edit"
              endpointName={path}
              requestType={request}
              summary={requestSummary}
              operationId={operationId}
              apiId={projectId}
              fns={fns}

            />
            <Button
              variant="danger"
              onClick={() => deleteEndpoint(path, request, operationId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg> Delete
            </Button>
          </Card.Footer>
        </div>
      )}
      {request === "get" && (
        <div>
          <Card.Header
            as="h5"
            style={{
              backgroundColor: "#61AFFE",
              color: "#fff",
              border: "none",
            }}
          >
            {request}{" "}
          </Card.Header>
          <Card.Body
            style={{
              backgroundColor: "#EBF3FB",
              border: "1px solid #61AFFE",
            }}
          >
            <Card.Title>{path}</Card.Title>
            <Card.Text>{requestSummary}</Card.Text>

          </Card.Body>
          <Card.Footer
            style={{
              border: "1px solid #61AFFE",
              borderTop: "none",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <Button
              variant="secondary"
              style={{ marginRight: "10px" }}
              onClick={() => setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg> Edit
            </Button>
            <MyModal
              show={showModal}
              onHide={() => setShowModal(false)}
              editEndpoint={editEndpoint}
              title="Editing Endpoint"
              mode="edit"
              endpointName={path}
              requestType={request}
              summary={requestSummary}
              operationId={operationId}
              apiId={projectId}
              fns={fns}
            />
            <Button
              variant="danger"
              onClick={() => deleteEndpoint(path, request, operationId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg> Delete
            </Button>
          </Card.Footer>
        </div>
      )}
      {request === "delete" && (
        <div>
          <Card.Header
            as="h5"
            style={{
              backgroundColor: "#F93E3E",
              color: "#fff",
              border: "none",
            }}
          >
            {request}{" "}
          </Card.Header>
          <Card.Body
            style={{
              backgroundColor: "#FAE7E7",
              border: "1px solid #F93E3E",
            }}
          >
            <Card.Title>{path}</Card.Title>
            <Card.Text>{requestSummary}</Card.Text>

          </Card.Body>
          <Card.Footer
            style={{
              border: "1px solid #F93E3E",
              borderTop: "none",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <Button
              variant="secondary"
              style={{ marginRight: "10px" }}
              onClick={() => setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg> Edit
            </Button>
            <MyModal
              show={showModal}
              onHide={() => setShowModal(false)}
              editEndpoint={editEndpoint}
              title="Editing Endpoint"
              mode="edit"
              endpointName={path}
              requestType={request}
              summary={requestSummary}
              operationId={operationId}
              apiId={projectId}
              fns={fns}

            />
            <Button
              variant="danger"
              onClick={() => deleteEndpoint(path, request, operationId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg> Delete
            </Button>

          </Card.Footer>
        </div>
      )}

    </Card>
  );
};

export default Request;
