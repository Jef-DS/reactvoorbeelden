import React, { Component } from 'react';

const PersoonForm = ({ voornaam, achternaam, changeVoornaam, changeAchternaam, verzenden }) => {
    return (
        <form>
            <h2>Persoonsgegevens</h2>
            <label htmlFor="voornaam">Voornaam: </label>
            <input type="text" id="voornaam" value={voornaam} onChange={changeVoornaam} />
            <label htmlFor="achternaam">Achternaam</label>
            <input type="text" id="achternaam" value={achternaam} onChange={changeAchternaam} />
            <button onClick={verzenden}>Verzenden</button>
        </form>
    )
}
const PersoonTabel = ({ lijst }) => {
    return (
        <table>
            <tbody>
                {lijst.map((item, index) => <tr key={index}><td>{item.voornaam}</td><td>{item.achternaam}</td></tr>)}
            </tbody>
        </table>
    )
}
class PersoonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { voornaam: "", achternaam: "", lijst: [] };
        this.changeAchternaam = this.changeAchternaam.bind(this);
        this.changeVoornaam = this.changeVoornaam.bind(this);
        this.verzenden = this.verzenden.bind(this);
    }
    changeVoornaam = (event) => {
        this.setState({ voornaam: event.target.value });
    }
    changeAchternaam = (event) => {
        this.setState({ achternaam: event.target.value });
    }
    verzenden = (event) => {
        event.preventDefault();
        let voornaam = this.state.voornaam;
        let achternaam = this.state.achternaam;
        let lijst = Array.from(this.state.lijst);
        lijst.push({ voornaam: voornaam, achternaam: achternaam });
        this.setState({ voornaam: "", achternaam: "", lijst: lijst });
        console.log(this.state.lijst);
    }
    render() {
        return (
            <div>
                <PersoonForm voornaam={this.state.voornaam} achternaam={this.state.achternaam}
                    changeVoornaam={this.changeVoornaam} changeAchternaam={this.changeAchternaam}
                    verzenden={this.verzenden} />
                <PersoonTabel lijst={this.state.lijst} />
            </div>
        )
    }
}
export default PersoonContainer;
