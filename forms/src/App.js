import React, {Component} from 'react';

import './App.css';

function App() {
  return (
    <TekstVeld/>
  );
}
class TekstVeld extends Component {
  constructor(props){
    super(props);
     this.state={tekst: ""}
  }
  /* 'event' is niet het DOM-event, maar een SyntheticEvent
   * Dat is een wrapper rond het DOM-event. Het heeft dezelfde interface
   * als het DOM-event, maar het is cross-browser. Indien nodig kunnen we via
   * het nativeEvent attribuut aan het onderliggende DOM-event
   */
  handleChange = (event) => {
    this.setState({tekst: event.target.value});
  }
  render(){
    // een inputcomponent wordt up-to-date gehouden via de state
    // De state wordt up-to-date gehouden via het onChange event
    return <input type="text" value={this.state.tekst} onChange={this.handleChange}/>
  }
}

export default App;
