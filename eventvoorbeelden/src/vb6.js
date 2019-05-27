import React, {Component} from 'react';
/*
 * Stateless component om de button te tonen
 */
const TellerButton = (props) => {
    return <button onClick={props.handler}>Teller is {props.teller}</button>
}

/*
 * Stateful component die de waarde van teller bevat en de handler
 * die bepaalt wat er moet gebeuren wanneer men op de knop klikt
 */
export default class TellerButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { teller: 0 }
        //Binding is niet nodig wanneer we een arrow functie gebruiken
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        const teller = this.state.teller + 1;
        this.setState({ teller: teller });
    }
    render() {
        return (
            // We geven handleClick door aan de stateless component
            <TellerButton handler={this.handleClick} teller={this.state.teller} />
        )
    }
}
