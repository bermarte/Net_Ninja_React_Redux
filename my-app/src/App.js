
import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

    state = {
      ninjas: [
        {name: 'jan', age: 50, belt: 'black', id: 1},
        {name: 'mario', age: 40, belt: 'red', id: 2},
        {name: 'niel', age: 20, belt: 'white', id: 3}
      ]
    }
    addNinja = (ninja) => {
      //console.log(ninja)
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      this.setState({
        ninjas: ninjas
      })
    }

    deleteNinja = (id) => {
      console.log('delete', id);
      let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
      this.setState({
        ninjas: ninjas
      })
    }
    //hooks
    componentDidMount() {
      console.log('component mounted');
    }
    componentDidUpdate(prevProps, prevState) {
      console.log('component did update');
      console.log(prevProps. prevState);
    }
    //render method is only for classes
    render() {
        return(
            <div className="App">
                <h1>My React app</h1>
                <p>Welcome</p>
                <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
                {/* <Ninjas name="Ryu" age="45" belt="black" />
                <Ninjas name="Mario" age="50" belt="orange" /> */}
                <AddNinja addNinja={this.addNinja}/>
            </div>
        )
    }
}

export default App;