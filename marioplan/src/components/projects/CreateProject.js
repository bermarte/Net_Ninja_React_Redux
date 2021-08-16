// rce
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

 class CreateProject extends Component {
    state = {
        title:'',
        content:''
    }

    handleChange = (e) => {
        this.setState({
            // will be 'title' or 'content'
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h1 className="grey-text text-darken-3">Create new project</h1>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

// createProject is an action creator
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => {
            dispatch(createProject(project))
        }
    }
}


export default connect(null, mapDispatchToProps)(CreateProject)
