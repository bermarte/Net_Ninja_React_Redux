import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
//glue library
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        // destructuring, grab the projects object of the props
        const { projects } = this.props;
        return(
            <div className="dashboard container">
                {/* projectlist and notification */}
                <div className="row">
                    {/* left -  project list*/}
                    <div className="col s12 m6">
                        {/* pass redux state to the component */}
                        <ProjectList projects={projects} />
                    </div>
                    {/* right  1 gap in between -notification */}
                    <div className="col s12 m5 offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

//map redux state to props
const mapStateToProps = (state) => {
    // see rootReducer: project
    // and then see projectReducer: projects

    return{
        projects: state.project.projects
    };
};

export default connect(mapStateToProps)(Dashboard);