import React, {Component} from 'react';
/*
 * In het vorige voorbeeld had TellerButton twee taken
 * 1. het resultaat van de teller tonen
 * 2. de button leveren die de teller wijzigt
 * 
 * In dit voorbeeld worden die twee taken verdeeld over twee componenten
 * De uitwisseling van informatie tussen de twee componenten gebeurt via
 * de container component
 */

// React functie die de knop bevat
const TellerButton2 = (props) => <button onClick={props.handler}>Klik mij</button>
// React functie die de teller toont
const TellerText2 = (props) => <span>Teller: {props.teller}</span>

export default class TellerButton2Container extends Component{
  constructor(props){
    super(props);
    this.state = {teller: 0};
  }
  handleClick = () => {
    const teller = this.state.teller + 1;
    this.setState({teller: teller});
  }
  render() {
    return(
      <div>
        <TellerButton2 handler={this.handleClick}></TellerButton2>
        <TellerText2 teller={this.state.teller}></TellerText2>
      </div>
    )
  }
}
