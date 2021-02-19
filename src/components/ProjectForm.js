import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const MyForm = (props) => {
  const { projectName } = props.initValues;
  const stringInitValue = JSON.stringify(props.initValues);

  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required("*Endpoint name is required"),
  });

  return (
    <Formik
      initialValues={{
        projectName: projectName
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          //pass data back to pathcontainer

          if (props.mode === "add") {
            props.addProject(
              values.projectName,
            );
          } else {
            props.editProject(
              stringInitValue,
              values.projectName
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

          <Form.Group
            controlId="formEndpointName"
          >
            <Form.Label>Project Name:</Form.Label>
            <Form.Control
              type="text"
              name="projectName"
              placeholder="Enter a project Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.projectName}
            />
            {touched.projectName && errors.projectName ? (
              <div className="error-message">{errors.projectName}</div>
            ) : null}
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
