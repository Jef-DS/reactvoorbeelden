import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Klok } from './vb3';

function App() {
  const items = [
    {href: "http://www.cevora.be", tekst: "Naar Cevora"},
    {href: "http://www.betavzw.org", tekst: "Naar Beta"}
  ]
  return (
    <React.Fragment>
      <MijnLink href="http://www.cevora.be" target="_blank" tekst="Naar Cevora"/>
      <MijnList items={items}/>
      <Klok/> // zie vb3.jsx
    </React.Fragment>
  );
}

function MijnList(props){
  return(
    <ul>
      {
          props.items.map((item, index) => 
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
