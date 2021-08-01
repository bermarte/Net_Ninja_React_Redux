import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
         <NavBar />
         <Switch>
           <Route path='/' component={Dashboard}></Route>
         </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
