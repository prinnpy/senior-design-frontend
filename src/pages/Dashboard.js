import React, { useState, useEffect } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Topbar from "../components/Topbar";
import ProjectsContainer from "../components/ProjectsContainer";

import Endpoints from "./Endpoints";

import db from "../firebase/firebase";

const Dashboard = ({ user }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [onGoToEndpointClicked, setOnGoToEndpointClicked] = useState(false);
  const [currentProject, setCurrentProject] = useState("");

  const isGoToEndpointClicked = (isClicked, projectName) => {
    if (isClicked) {
      setOnGoToEndpointClicked(true);
      setCurrentProject(projectName);
    }
  };

  const isBackClicked = (isClicked) => {
    if (isClicked) {
      setOnGoToEndpointClicked(false);
      setCurrentProject("");
    }
  };

  useEffect(() => {
    db.collection("api")
      .where("userId", "==", user.uid)
      .get()
      .then((querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          const document = {};
          document["projectName"] = doc.id;
          document["data"] = doc.data();
          documents.push(document);
        });
        setData(documents);
      })
      .catch((err) => {
        console.log("error getting documents: ", err);
      });
  }, []);

  return (
    <div>
      {onGoToEndpointClicked ? (
        data.map((project) => {
          if (project.projectName === currentProject) {
            return (
              <Endpoints
                userName={user.displayName}
                projectName={currentProject}
                isBackClicked={isBackClicked}
              />
            );
          }
        })
      ) : (
        <div>
          <Topbar userName={user.displayName} />
          <Jumbotron>
            <h1 style={{ fontSize: "50px", color: "black" }}>
              Hi there, {user.displayName}
            </h1>
            <p>
              Welcome to API builder. The best place to create your APIs with
              ease.
            </p>
          </Jumbotron>
          {console.log(data)}
          {data && (
            <ProjectsContainer
              data={data}
              isGoToEndpointClicked={isGoToEndpointClicked}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
