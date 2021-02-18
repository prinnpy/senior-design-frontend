import React, { useState, useEffect } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import PathsContainer from "../components/PathsContainer";
import Topbar from "../components/Topbar";
import Button from "react-bootstrap/Button";
import BottomBar from "../components/BottomBar";
import db from "../firebase/firebase";

const Endpoints = ({ isBackClicked, userName, projectName }) => {
  const goBack = () => {
    isBackClicked(true);
  };

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    db.collection("api")
      .doc(projectName)
      .onSnapshot(
        (doc) => {
          let data = doc.data().swaggerDoc;
          setLoading(false);
          setData(JSON.parse(data));
        },
        (err) => {
          setError(err);
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
      {data.swagger && <PathsContainer data={data} projectName={projectName}/>}
      <BottomBar tags={data.tags} />
    </div>
  );
};

export default Endpoints;
