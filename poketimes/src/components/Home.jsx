import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokeBall from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    render () {
        console.log(this.props);
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={PokeBall} alt="a pokeball" />
                        <div className="card-content">
                            <Link to={'/'+ post.id}>
                                <span className="card-title red-text">
                                    {post.title}
                                </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ): (
            <div className="center">no posts yet</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
//we take data from the store and we map it to the props of the component
const mapStateToProps = (state) => {
    return {
        // we take the state of the store, we grab the posts property of that store
        // and we apply it to a property called posts
        //and we gonna map it to the props
        //then we connect it to connect
        posts: state.posts
    }
}

// returning the high order component as a  function, then wrapping Home
//it connects the component to the redux store
export default connect(mapStateToProps)(Home);