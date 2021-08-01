import React from 'react'

function ProjectDetails(props) {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente atque dolores voluptas illum qui iure, assumenda odit magni ab natus quae ullam ad placeat praesentium hic! Officiis ullam voluptatibus officia!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd Setpember, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
