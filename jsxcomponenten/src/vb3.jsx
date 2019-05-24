import React, {Component} from 'react';

//state gebruiken => class in plaats van een function
export class Klok extends Component{
    constructor(props){
        //ALTIJD constructor van basisklasse oproepen
        super(props);
        //props kunnen alleen gewijzigd worden door de parent component
        // =>toestand die veranderlijk is in de component zit in state
        this.state = {
            huidigeTijd: (new Date()).toLocaleTimeString()
        }
        //om de state te veranderen, moeten we setState() gebruiken
        //die functie zorgt voor "reconciliation":
        // - react component tree wordt aangepast
        // - DOM tree wordt aangepast op basis van react component tree
        // wanneer we 'state' rechtstreeks zouden aanpassen, gebeurt dit 
        // reconciliation proces niet en zien we geen veranderingen
        setInterval(() => this.setState({huidigeTijd: (new Date()).toLocaleTimeString()}),
                    1000);
        /*
         * Dit werkt dus niet
         * 
         * setInterval(() => {this.state = {...this.state, huidigeTijd: (new Date()).toLocaleTimeString()};
         *   console.log(this.state);
         * })
         */ 
    }
    render(){
        return(
            <div className="ml-4">{this.state.huidigeTijd}</div>
        )
    }
}