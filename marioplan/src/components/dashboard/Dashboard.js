import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard container">
                {/* projectlist and notification */}
                <div className="row">
                    {/* left -  project list*/}
                    <div className="col s12 m6">
                        <ProjectList />
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

export default Dashboard;