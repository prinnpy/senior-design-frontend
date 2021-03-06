import React, { useState, useEffect } from "react";
import Request from "./Request";
import MyModal from "./MyModal";
import { Button } from "react-bootstrap";
import db from "../firebase/firebase";

const PathsContainer = ({ data, projectId, fns }) => {
  const paths = data.paths;
  const [showModal, setShowModal] = useState(false);
  const [finalData, setFinalData] = useState(JSON.stringify(data));

  useEffect(() => {
    //function to add to the right database
    db.collection("api")
      .doc(projectId)
      .set({ swaggerDoc: finalData }, { merge: true });
  }, [finalData]);

  //get data from the form and convert it into the correct format
  const addEndpoint = (requestType, endpointName, summary, operationID) => {
    let formatEndpointName = "/" + endpointName;
    // let newPaths = JSON.parse(JSON.stringify(paths)); <-- this is for deep copy which is what we want for easier to upload to firebase
    let newData = JSON.parse(JSON.stringify(data));
    let newPaths = JSON.parse(JSON.stringify(paths));

    //format input data into a JSON format - done all works
    if (formatEndpointName in newPaths) {
      newPaths[formatEndpointName][requestType] = {
        tags: [],
        summary: summary,
        description: "",
        operationId: operationID,
        consumes: ["application/json", "application/xml"],
        produces: ["application/json", "application/xml"],
        parameters: [],
        responses: {
          400: {
            description: "Unknown error",
          },
          404: {
            description: "Pet not found",
          },
          405: {
            description: "Validation exception",
          },
        },
        security: [],
      };
    } else {
      newPaths[formatEndpointName] = {
        [requestType]: {
          tags: [],
          summary: summary,
          description: "",
          operationId: operationID,
          consumes: ["application/json", "application/xml"],
          produces: ["application/json", "application/xml"],
          parameters: [],
          responses: {
            400: {
              description: "Unknown error",
            },
            404: {
              description: "Pet not found",
            },
            405: {
              description: "Validation exception",
            },
          },
          security: [],
        },
      };
    }

    //use formatJSON to add to replace the original data in for paths
    newData["paths"] = newPaths; //got the perfect format for storing into firebase

    setFinalData(JSON.stringify(newData)); //set the data into the firebase database yayyyy
  };

  const editEndpoint = (
    initValues,
    requestType,
    endpointName,
    summary,
    operationId
  ) => {
    const initVal = JSON.parse(initValues);
    let formatEndpointName = endpointName;
    //find the enpoint that has the same operationID
    let newData = JSON.parse(JSON.stringify(data));
    let newPaths = JSON.parse(JSON.stringify(paths));

    //first delete the old endpoint
    //delete the route that has the matching id
    if (Object.keys(newPaths[initVal.endpointName]).length > 1) {
      //same endpoint but multiple requests
      //go into each route and find the matching id
      if (
        newPaths[initVal.endpointName][initVal.requestType].operationId ==
        operationId
      ) {
        //if match found delete the specific request
        delete newPaths[initVal.endpointName][initVal.requestType];
      }
    } else {
      //endpoint with only 1 request
      delete newPaths[initVal.endpointName];
    }

    //add back the new updated one
    if (formatEndpointName in newPaths) {
      newPaths[formatEndpointName][requestType] = {
        tags: [],
        summary: summary,
        description: "",
        operationId: operationId,
        consumes: ["application/json", "application/xml"],
        produces: ["application/json", "application/xml"],
        parameters: [],
        responses: {
          400: {
            description: "Unknown error",
          },
          404: {
            description: "Pet not found",
          },
          405: {
            description: "Validation exception",
          },
        },
        security: [],
      };
    } else {
      newPaths[formatEndpointName] = {
        [requestType]: {
          tags: [],
          summary: summary,
          description: "",
          operationId: operationId,
          consumes: ["application/json", "application/xml"],
          produces: ["application/json", "application/xml"],
          parameters: [],
          responses: {
            400: {
              description: "Unknown error",
            },
            404: {
              description: "Pet not found",
            },
            405: {
              description: "Validation exception",
            },
          },
          security: [],
        },
      };
    }
    //print to test
    console.log(JSON.stringify(newPaths));

    //use formatJSON to add to replace the original data in for paths
    newData["paths"] = newPaths; //got the perfect format for storing into firebase

    setFinalData(JSON.stringify(newData)); //set the data into the firebase database yayyyy
  };

  const deleteEndpoint = (path, request, operationId) => {
    //delete works now
    //find the enpoint that has the same operationID
    let newData = JSON.parse(JSON.stringify(data));
    let newPaths = JSON.parse(JSON.stringify(paths));

    //delete the route that has the matching id
    if (Object.keys(newPaths[path]).length > 1) {
      //same endpoint but multiple requests
      //go into each route and find the matching id
      if (newPaths[path][request].operationId == operationId) {
        //if match found delete the specific request
        delete newPaths[path][request];
      }
    } else {
      //endpoint with only 1 request
      delete newPaths[path];
    }

    console.log(JSON.stringify(newPaths));

    //use formatJSON to add to replace the original data in for paths
    newData["paths"] = newPaths; //got the perfect format for storing into firebase

    setFinalData(JSON.stringify(newData)); //set the data into the firebase database yayyyy
  };

  //always add to the firebase funtion because add edit and delete endpoint all needs to add to the firebase database at the end
  //have a add to firebase function here

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1>Endpoints</h1>
        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
        <Button variant="outline-dark" onClick={() => setShowModal(true)}>
          + Add new endpoint
        </Button>
      </div>

      <MyModal
        show={showModal}
        onHide={() => setShowModal(false)}
        addEndpoint={addEndpoint}
        title="Adding Endpoint"
        mode="add"
        fns={fns}
      />

      <div style={{ marginBottom: "110px" }}>
        {Object.keys(paths).map((path) => {
          return (
            <div key={"pc" + paths[path]}>
              <h2>
                <strong>{path}</strong>
              </h2>
              {Object.keys(paths[path]).map((req) => {
                return (
                  <Request
                    key={paths[path][req].operationId}
                    path={path}
                    request={req}
                    requestSummary={paths[path][req].summary}
                    operationId={paths[path][req].operationId}
                    deleteEndpoint={deleteEndpoint}
                    editEndpoint={editEndpoint}
                    projectId={projectId}
                    fns={fns}

                  />
                );
              })}
              <hr style={{ marginTop: "40px" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PathsContainer;
