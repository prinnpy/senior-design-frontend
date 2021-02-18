import React from 'react';
import Projects from "./Projects";

const ProjectsContainer = ({data, isGoToEndpointClicked}) => {
    return (
        <div style={{ padding: "20px" }}>
            {data.map(project => {
                return <Projects project={project} isGoToEndpointClicked={isGoToEndpointClicked}/>
            })}
            
        </div>
    );
}

export default ProjectsContainer;
