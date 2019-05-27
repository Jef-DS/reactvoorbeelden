import React, {Component} from 'react';
export default class KlokStateful extends Component {
    constructor(props){
        super(props);
        this.state = {
            huidigeTijd: (new Date()).toLocaleTimeString()
        }
        setInterval(() => this.setState({huidigeTijd: (new Date()).toLocaleTimeString()}),
        1000);
    }
    render(){
        return (
            <React.Fragment>
                <DigitaleDisplay tijd={this.state.huidigeTijd}/>
                <AnalogeDisplay tijd={this.state.huidigeTijd}/>
            </React.Fragment>
        )
    }
}
const DigitaleDisplay = props => <div>{props.tijd}</div>
const AnalogeDisplay = props => {
  let [uren, minuten, seconden] = props.tijd.replace(/\u200E/g,"").split(":");
  uren = uren > 12? uren-12: uren;
  let wijzerplaatStijl = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
  };
  let secondenWijzerStijl = {
    position: 'relative',
    top: 86,
    left: 102,
    border: '1px solid red',
    width: '40%' , 
    height: 1,
    transform: 'rotate(' + (seconden*6 - 90) + 'deg)',
    transformOrigin: ' 0% 0%',
    backgroundColor: 'red'
  }
  let minutenWijzerStijl = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + (minuten*6 - 90) + 'deg)',
    transformOrigin: ' 0% 0%',
    backgroundColor: 'grey'
  }
  let urenWijzerStijl = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '30%',
    height: 7,
    transform: 'rotate(' + (uren*30 - 90) + 'deg)',
    transformOrigin: ' 0% 0%',
    backgroundColor: 'grey'
  }
  return (
    <div style={wijzerplaatStijl}>
      <div style={minutenWijzerStijl}/>
      <div style={urenWijzerStijl}/>
      <div style={secondenWijzerStijl}/>
    </div>
  )
}
