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

  const isGoToEndpointClicked = (isClicked, project) => {
    if (isClicked) {
      setOnGoToEndpointClicked(true);
      setCurrentProject(project);
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
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            if (doc.data().userId === user.uid) {
              const document = {};
              document["id"] = doc.id;
              document["projectName"] = doc.data().projectName;
              document["data"] = doc.data();
              documents.push(document);
            }
          });
          setData(documents);
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }, []);

  return (
    <div>
      {onGoToEndpointClicked ? (
        data.map((project) => {
          if (project.id === currentProject.id) {
            return (
              <Endpoints
                userName={user.displayName}
                projectName={currentProject.projectName}
                projectId={currentProject.id}
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
              Hello {user.displayName} 👋
            </h1>
            <p>
              Welcome to API builder. The best place to create your APIs with
              ease.
            </p>
          </Jumbotron>
          {data && (
            <ProjectsContainer
              userId={user.uid}
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
