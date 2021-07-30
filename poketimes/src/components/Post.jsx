import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        console.log('props', this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center"> {this.props.post.title}</h4>
                <p> {this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">loading postMessage...</div>
        )
        return(
            <div className="container">
                { post }
            </div>
        )
    }
}

//map our state to props
const mapStateToProps = (state, ownProps) => {
    
    let id = ownProps.match.params.post_id;
    console.log('id', id)
    console.log('find', state.posts.find(post => post.id === parseInt(id)))
    return {
        post: state.posts.find(post => post.id === parseInt(id))
    }
}

//we need to attach it to our props to be used in a component
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)