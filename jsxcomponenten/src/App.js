import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const items = [
    {href: "http://www.cevora.be", tekst: "Naar Cevora"},
    {href: "http://www.betavzw.org", tekst: "Naar Beta"}
  ]
  return (
    //Een render()-functie kan maar één root-element teruggeven
    //<React.Fragment> genereert geen <html>-code
    <React.Fragment>
      <MijnLink href="http://www.cevora.be" target="_blank" tekst="Naar Cevora"/>
      <MijnList items={items}/>
    </React.Fragment>
  );
}

function MijnList(props){
  return(
    <ul>
      {
          // Een array van objecten omzetten naar React-elementen
          // kan gemakkelijk met de Array.prototype.map()-functie
          props.items.map((item, index) => 
          // in een lijst met childelementen moet elk element een unieke key
          // hebben. In feite is de index van het element geen goede keuze,
          // maar voor dit voorbeeld kan het wel.
          <li key={index}><MijnLink href={item.href} tekst={item.tekst}/></li>
        )
      }
    </ul>
  )
}
function MijnLink(props) {
  const {tekst, href, target} = {...props};
  return (
    <a href={href} target={target}>{tekst}</a>
  )
}
export default App;
