import React from 'react'
import { Form, Card, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import db from "../firebase/firebase";


export default function Functionalities(props) {

    const { projectId, opId, fns } = props


    let initVals = {
        fn: 'None',
        pathType: 'Static Path',
        path: '',
        queryType: 'Static Query',
        query: ''
    }

    switch (fns[opId].type) {
        case 'None':

            break;
        case 'firestore-document-get':
            initVals.fn = 'Firestore - Get A Document'
            break;
        case 'firestore-document-update':
            initVals.fn = 'Firestore - Update A Document'

            break;
        case 'firestore-document-delete':
            initVals.fn = 'Firestore - Delete A Document'

            break;
        case 'firestore-collection-get':
            initVals.fn = 'Firestore - Get A Collection'

            break;
        case 'firestore-collection-query':
            initVals.fn = 'Firestore - Query A Collection'

            break;

        default:
            break;
    }

    if (fns[opId].path == 'dynamic') {
        initVals.pathType = 'Dynamic Path'
    }
    else {
        initVals.pathType = 'Static Path'
        initVals.path = fns[opId].path
    }

    if (fns[opId].query == 'dynamic') {
        initVals.queryType = 'Dynamic Query'
    }
    else {
        initVals.queryType = 'Static Query'
        initVals.query = fns[opId].query
    }

    const validationSchema = Yup.object().shape({
        requestType: Yup.string(),
        endpointName: Yup.string(),
        summary: Yup.string(),
        operationID: Yup.string(),
    });


    async function updateFunctionalities(values) {
        console.log('values', values)

        let functionalities = fns;
        switch (values.fn) {
            case 'None':
                functionalities[opId] = {
                    type: 'None',
                    path: '',
                    query: ''
                }
                break;
            case 'Firestore - Get A Document':
                functionalities[opId] = {
                    type: 'firestore-document-get',
                    path: values.path == 'Static Path' ? values.path : 'dynamic',
                    query: ''
                }
                break;
            case 'Firestore - Update A Document':
                functionalities[opId] = {
                    type: 'firestore-document-update',
                    path: values.path == 'Static Path' ? values.path : 'dynamic',
                    query: ''
                }

                break;
            case 'Firestore - Delete A Document':
                functionalities[opId] = {
                    type: 'firestore-document-delete',
                    path: values.path == 'Static Path' ? values.path : 'dynamic',
                    query: ''
                }

                break;
            case 'Firestore - Get A Collection':
                functionalities[opId] = {
                    type: 'firestore-collection-get',
                    path: values.path == 'Static Path' ? values.path : 'dynamic',
                    query: ''
                }
                break;
            case 'Firestore - Query A Collection':
                functionalities[opId] = {
                    type: 'firestore-collection-query',
                    path: '',
                    query: values.path == 'Static Query' ? values.query : 'dynamic'
                }

                break;

            default:
                break;
        }
        console.log('fun', functionalities)
        console.log('id', projectId)
        await db.collection("api")
            .doc(projectId)
            .set({ functionalities: { ...functionalities } }, { merge: true });
        console.log('done')
    }

    return (
        <div style={{ marginTop: '1rem' }}>
            <Formik
                initialValues={initVals}
                validationSchema={validationSchema}

                onSubmit={async (values) => {
                    await updateFunctionalities(values)
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
                                                    values.fn == 'Firestore - Delete A Document' ||
                                                    values.fn == 'Firestore - Get A Collection') &&
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
                                                (values.fn == 'Firestore - Query A Collection') &&
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
                                    {
                                        values.queryType == 'Dynamic Query' &&
                                        <p>Dynamic Queries will expect a body or query parameter as 'dynamicQuery' in generated code.  </p>

                                    }
                                    {
                                        values.pathType == 'Dynamic Path' &&
                                        <p>Dynamic Paths will expect a body or query parameter as 'dynamicPath' in generated code.  </p>

                                    }
                                    {/* <pre>{JSON.stringify(values)}</pre> */}

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={isSubmitting}
                                        style={{ marginTop: "20px" }}
                                    >
                                        Update
          </Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Form>
                )
                }
            </Formik >
        </div>
    )
}
