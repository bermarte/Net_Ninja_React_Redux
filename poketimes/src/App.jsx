import React, { Component } from "react";
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import './index.css';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
              <NavBar />
              {/* we use Switch because otherwise path="/:post_id" would also match path='/contact', for example */}
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                {/* :post_id is a route parameter */}
                <Route path="/:post_id" component={Post} />
              </Switch>
            </div>
          </BrowserRouter>
        )
    }
}

export default App;
