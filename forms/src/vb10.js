import React, { Component } from 'react';

class PersoonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voornaam: '',
            achternaam: ''
        }
    }

    /*
     * Algemene change-handler op basis van de name property van 
     * het form element
     */
    changeVeld = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    /*
     * event.preventDefault() om roundtrip naar server te voorkomen
     * Aan setState is een extra functie toegevoegd die wordt uitgevoerd
     * nadat de state gewijzigd is (setState werkt asynchroon)
     */
    verzenden = (event) => {
        event.preventDefault();
        this.props.submit(this.state.voornaam, this.state.achternaam);
        this.setState({ voornaam: "", achternaam: "" }, () => console.log(this.state));
    }
    render() {
        return (
            <div className="h5 bg-info text-white p-2">
                <div className="form-group row">
                    <label className="col-4 col-form-label" htmlFor="voornaam">Voornaam</label>
                    <div className="col-8">
                        <input className="form-control"
                            name="voornaam" id="voornaam"
                            value={this.state.voornaam}
                            onChange={this.changeVeld} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-4 col-form-label" htmlFor="achternaam">Achternaam</label>
                    <div className="col-8">
                        <input className="form-control"
                            name="achternaam" id="achternaam"
                            value={this.state.achternaam}
                            onChange={this.changeVeld} />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.verzenden}>Verzenden</button>
            </div>
        )
    }
}
const PersoonTabel = ({ lijst }) => {
    return (
        <table className="table table-striped">
            <thead><tr><th scope="col">Voornaam</th><th scope="col">Achternaam</th></tr></thead>
            <tbody>
                {lijst.map((item, index) => <tr key={index}><td>{item.voornaam}</td><td>{item.achternaam}</td></tr>)}
            </tbody>
        </table>
    )
}

class PersoonContainer2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lijst: []
        }
    }
    verzenden = (voornaam, achternaam) => {
        const lijst = Array.from(this.state.lijst);
        lijst.push({ voornaam: voornaam, achternaam: achternaam });
        this.setState({ lijst: lijst });
    }
    render() {
        return (
            <div className='row'>
                <div className="col">
                    <PersoonForm submit={this.verzenden} />
                </div>
                <div className="col">
                    <PersoonTabel lijst={this.state.lijst} />
                </div>
            </div>
        )
    }
}
export default PersoonContainer2;