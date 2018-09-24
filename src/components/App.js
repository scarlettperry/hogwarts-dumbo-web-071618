import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogShowcase from './HogShowcase'

class App extends Component {
  render() {
    // console.log("App", hogs)
    return (
      <div className="App">
          < Nav />
          < HogShowcase hogs={hogs}/>
      </div>
    )
  }
}

export default App;
