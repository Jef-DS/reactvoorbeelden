import React, {Component} from 'react';
export default class Opslag extends Component {
    constructor(props){
      super(props);
      this.state = {
        top: 50,
        left: 100
      }
      // om 'this' te kunnen gebruiken in een 'klassieke' functie
      // moeten we de functie koppelen aan het this object
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }
    handleMouseEnter(event) {
      const top = (event.clientX + 100) % 500;
      const left = (event.clientY + 100) % 400;
      this.setState({top: top, left: left});
    }
    render(){
      //Een css-stijl is een object
      const stijl = {
        top: this.state.top,
        left: this.state.left,
        position: 'absolute'
      }
      //De react DOM-objecten hebben handlers voor de standaard DOM handlers
      return ( 
        <button style={stijl} onMouseEnter={this.handleMouseEnter}>Ik krijg 100% opslag</button>
      )
    }
  }