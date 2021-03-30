import React, { useState, useEffect } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import PathsContainer from "../components/PathsContainer";
import Topbar from "../components/Topbar";
import Button from "react-bootstrap/Button";
import BottomBar from "../components/BottomBar";
import db from "../firebase/firebase";

const Endpoints = ({ isBackClicked, userName, projectId, projectName }) => {
  const goBack = () => {
    isBackClicked(true);
  };

  const [data, setData] = useState({});
  const [functionalities, setFunctionalities] = useState({});

  useEffect(() => {
    db.collection("api")
      .doc(projectId)
      .onSnapshot(
        (doc) => {
          let data = doc.data().swaggerDoc;
          setData(JSON.parse(data));
          setFunctionalities(doc.data().functionalities)
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }, []);

  return (
    <div>
      <Topbar userName={userName} />
      <Jumbotron>
        <Button variant="outline-dark" className="mb-4" onClick={goBack}>
          {"< Back"}
        </Button>
        <h1 style={{ fontSize: "50px", color: "black" }}>{projectName}</h1>
      </Jumbotron>
      {data.swagger && <PathsContainer data={data} projectId={projectId} fns={functionalities} />}
      <BottomBar tags={data.tags} apiID={projectId} />
    </div>
  );
};

export default Endpoints;
