import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogShowcase from './HogShowcase'

class App extends Component {
  constructor(){
    super()
    this.state = {
      greased: false,
      sortBy: "all"
    }
  }

  checkedGreased = () => {
    this.setState((prevState)=>{
      return {greased: !prevState.greased}
    })
  }

  sortByTerm = (event) => {
    let term = event.target.value
    this.setState({
      sortBy: term
    })
  }

  showGreasedHogs = () => {
    if (this.state.greased) {
      return hogs.filter(hog => hog.greased)
    }
    else {
      return hogs
    }
  }

  showHogs = () => {
    let currentHogs = this.showGreasedHogs()
    if (this.state.sortBy === "name") {
      return currentHogs.sort(function(hog1, hog2) {
        return hog1.name.localeCompare(hog2.name)
      })
    }
    else if (this.state.sortBy === "weight") {
      return currentHogs.sort(function(hog1, hog2) {
        return hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] -    hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        })
    }
    else {
      return hogs
    }
  }
  render() {
    console.log("App", this.state.greased)
    return (
      <div className="App">
          <Nav
            checkedGreased={this.checkedGreased}
            sortByTerm={this.sortByTerm}
          />
          <HogShowcase
            hogs={this.showHogs()}
          />
      </div>
    )
  }
}

export default App;
