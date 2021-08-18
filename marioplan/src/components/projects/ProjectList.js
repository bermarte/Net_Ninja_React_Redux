import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

//pass redux state from the Dashboard
//eg <ProjectList projects={projects} />
//here we use directly desctructuring in the argument passed to ProjectList
//pass the projects property from the props
const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">            
            {/* map trough the projects */}
            {/* we may have no map, && works like and IF THEN */}
            {projects && projects.map(project => {
                // returns JSX
                return(
                    <Link to={`/project/${project.id}`}>
                        <ProjectSummary project={project} key={project.id}/>
                    </Link>
                )
            })}
        </div>
    );
}

export default ProjectList;