import React from 'react';
import './App.css';
//voegt een link toe naar de bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <MijnLink href="http://www.cevora.be" target="_blank" tekst="Naar Cevora"/>
  );
}

function MijnLink(props) {
  // haal de tekst-property uit het object
  // en bewaar de andere properties in a_props
  // dit wordt beschouwd als een antipattern omdat we niet weten
  // welke properties aanwezig zijn in 'props'

  /* const {tekst, ...a_props} = {...props};
   * return ( 
   * <a {...a_props}>{tekst}</a>
   *)
   */

  // Hier weten we exact wat we aan het doen zijn. 
  // (maar de toetsen van je computer en je vingertoppen verslijten meer)
  const {tekst, href, target} = {...props};
  return (
    <a href={href} target={target}>{tekst}</a>
  )
}
export default App;
