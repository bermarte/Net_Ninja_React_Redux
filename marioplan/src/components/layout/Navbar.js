import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const NavBar = (props) => {
    const { auth } = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MarioPlan</Link>
                { links }
                {/* <SignedInLinks />
                <SignedOutLinks /> */}
            </div>
        </nav>
    );
}
const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);