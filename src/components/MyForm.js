import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Functionalities from './Functionalities'

const MyForm = (props) => {
  const { requestType, endpointName, summary, operationID } = props.initValues;
  const stringInitValue = JSON.stringify(props.initValues);
  const {projectId, fns} = props
  const validationSchema = Yup.object().shape({
    requestType: Yup.string().required("*Request type is required"),
    endpointName: Yup.string().required("*Endpoint name is required"),
    summary: Yup.string().required("*Summary is required"),
    operationID: Yup.string().required("*ID is required"),
  });

  return (
    <>
    <Card style={{ width: '100%', maxWidth: '500px' }}>
    <Card.Body>
      <Formik
        initialValues={{
          requestType: requestType,
          endpointName: endpointName,
          summary: summary,
          operationID: operationID,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          setTimeout(() => {
            //pass data back to pathcontainer

            if (props.mode === "add") {
              props.addEndpoint(
                values.requestType,
                values.endpointName,
                values.summary,
                values.operationID
              );
            } else {
              props.editEndpoint(
                stringInitValue,
                values.requestType,
                values.endpointName,
                values.summary,
                values.operationID
              );
            }

            props.onHide();
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className="mx-auto">
            <Form.Group controlId="formReqType">
              <Form.Label>Request Type:</Form.Label>
              <Form.Control
                as="select"
                name="requestType"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.requestType}
              >
                <option value="">Select type...</option>
                <option value="get">GET</option>
                <option value="post">POST</option>
                <option value="put">PUT</option>
                <option value="delete">DELETE</option>
              </Form.Control>
              {touched.requestType && errors.requestType ? (
                <div className="error-message">{errors.requestType}</div>
              ) : null}
            </Form.Group>

            <Form.Group
              controlId="formEndpointName"
              style={{ marginTop: "20px" }}
            >
              <Form.Label>Endpoint Name:</Form.Label>
              <Form.Control
                type="text"
                name="endpointName"
                placeholder="Enter an endpoint Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endpointName}
              />
              {touched.endpointName && errors.endpointName ? (
                <div className="error-message">{errors.endpointName}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formSummary" style={{ marginTop: "20px" }}>
              <Form.Label>Summary:</Form.Label>
              <Form.Control
                type="text"
                name="summary"
                placeholder="Enter a summary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.summary}
              />
              {touched.summary && errors.summary ? (
                <div className="error-message">{errors.summary}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formID" style={{ marginTop: "20px" }}>
              <Form.Label>Operation ID:</Form.Label>
              <Form.Control
                type="text"
                name="operationID"
                placeholder="Enter an unique ID"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.operationID}
              />
              {touched.operationID && errors.operationID ? (
                <div className="error-message">{errors.operationID}</div>
              ) : null}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              style={{marginTop: "10px", marginBottom: "5px"  }}
            >
              Update
          </Button>
          </Form>
        )}
      </Formik>
      </Card.Body>
      </Card>
      <Functionalities fns={fns} projectId={projectId} opId={operationID} />
    </>
  );
};

export default MyForm;
