import React, {Component} from 'react'

class HogCard extends Component {
  constructor() {
    super()
    this.state = {
      flip: false
    }
  }

  handleFlip = () => {
    this.setState((prevState)=>{
      return {flip: !prevState.flip}
    })
  }

  render(){
    {/*console.log("HogCard", this.props.hog)*/}
    {/*console.log("state", this.state)*/}
    return (
      <div className = "ui eight wide column">
        {this.state.flip === false ?
          <div className="pigTile">
            <button className="button" onClick={this.handleFlip}>Oink Oink Click Me</button><br/><br/>
            <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)}/><br/>
            <strong>Name:</strong> {this.props.hog.name}<br/>
          </div>
          :
          <div className="pigTile">
            <button className="button" onClick={this.handleFlip}>Oink Oink Click Me</button><br/><br/>
            <strong>Weight:</strong> {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]} lbs<br/>
            <strong>Specialty:</strong> {this.props.hog.specialty}<br/>
            <strong>Highest Medal Achieved:</strong> {this.props.hog["highest medal achieved"]}
          </div>
         }
      </div>
    )
  }
}


export default HogCard
