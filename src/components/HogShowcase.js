import React, {Component} from 'react'
import HogCard from './HogCard'


class HogShowcase extends Component {
  constructor() {
    super()
  }

  render(){
    // console.log("HogShowcase", this.props.hogs)
    {/*when iterating to create a single object, return it in a component tag*/}
    let singleHog = this.props.hogs.map(hog => <HogCard hog = {hog}/>)
    return(
      <div className= "ui grid container">
        {singleHog}
      </div>
    )
  }
}

export default HogShowcase
