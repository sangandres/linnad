
import './App.css';
import Linn from './Linn'

import berliinImg from './berliin.jpg'
import londonImg from './london.jpg'
import pariisImg from './pariis.png'

function App() {
  return (
    <div className="App">
      <h1>Linnad</h1>
      <Linn nimi="London" pildiAadress={londonImg}/>
      <Linn nimi="Pariis" pildiAadress={pariisImg}/>
      <Linn nimi="Berliin" pildiAadress={berliinImg}/>
     
    </div>
  );
}

export default App;
