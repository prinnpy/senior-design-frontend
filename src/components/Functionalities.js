import React from 'react'
import { Form, Card } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";




export default function Functionalities() {

    const validationSchema = Yup.object().shape({
        requestType: Yup.string().required("*Request type is required"),
        endpointName: Yup.string().required("*Endpoint name is required"),
        summary: Yup.string().required("*Summary is required"),
        operationID: Yup.string().required("*ID is required"),
    });


    return (
        <Formik
            initialValues={{
                fn: 'None',
                pathType: 'Static Path',
                path: '',
                queryType: 'Static Query',
                query: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
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
                    <div className="w-100">

                        <Card style={{ width: '100%', maxWidth: '500px' }}>
                            <Card.Body>
                                <Card.Title>Generate Code</Card.Title>
                                <Card.Text>
                                    We can auto generate code for this endpoint. Simply follow the editor below.
                                    If you select none, the API endpoint will just be a stub.
                                </Card.Text>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Functionality:</Form.Label>
                                    <Form.Control as="select"
                                        type="text"
                                        name="fn"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fn}>
                                        <option>None</option>
                                        <option>Firestore - Get A Document</option>
                                        <option>Firestore - Update A Document</option>
                                        <option>Firestore - Delete A Document</option>
                                        <option>Firestore - Get A Collection</option>
                                        <option>Firestore - Query A Collection</option>
                                    </Form.Control>

                                </Form.Group>
                                {values.fn != 'None' &&
                                    <>
                                        {
                                            (values.fn == 'Firestore - Get A Document' ||
                                                values.fn == 'Firestore - Update A Document' ||
                                                values.fn == 'Firestore - Delete A Document') &&
                                            <>
                                                <Form.Group controlId="exampleForm.ControlSelect2">
                                                    <Form.Label>Document Path:</Form.Label>
                                                    <Form.Control as="select"
                                                        type="text"
                                                        name="pathType"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.pathType}>
                                                        <option>Static Path</option>
                                                        <option>Dynamic Path</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                {
                                                    values.pathType == 'Static Path' &&
                                                    <Form.Group>
                                                        <Form.Label>Path:</Form.Label>
                                                        <Form.Control as="input"
                                                            type="text"
                                                            name="path"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.path}></Form.Control>
                                                    </Form.Group>
                                                }
                                            </>
                                        }
                                        {
                                            (values.fn == 'Firestore - Get A Collection' ||
                                                values.fn == 'Firestore - Query A Collection') &&
                                            <>
                                                <Form.Group controlId="exampleForm.ControlSelect3">
                                                    <Form.Label>Collection Query:</Form.Label>
                                                    <Form.Control as="select"
                                                        type="text"
                                                        name="queryType"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.queryType}>
                                                        <option>Static Query</option>
                                                        <option>Dynamic Query</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                {
                                                    values.queryType == 'Static Query' &&
                                                    <Form.Group>
                                                        <Form.Label > Query:</Form.Label>
                                                        <Form.Control as="input"
                                                            type="text"
                                                            name="query"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.query}></Form.Control>
                                                    </Form.Group>
                                                }

                                            </>
                                        }
                                    </>
                                }
                            </Card.Body>
                        </Card>
                    </div>
                </Form>
            )
            }
        </Formik >
    )
}
