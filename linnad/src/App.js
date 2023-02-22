
import './App.css';
import Linn from './Linn' 

import berliinImg from './berliin.jpg'
import londonImg from './london.jpg'
import pariisImg from './pariis.png'

function App() {
const linnad = [
      { nimi: "London", pildiAadress: londonImg },
      { nimi: "Pariis", pildiAadress: pariisImg },
      { nimi: "Berliin", pildiAadress: berliinImg },
    ] 

  const klikkLisaLinn = () => {
    console.log('Klikiti nupul')
  }

  return (
    <div className="App">
      <h1>Linnad</h1>   
     {linnad.map(linn, index)} => {
    return <Linn key={index} nimi={linn.nimi} pildiAadress={linn.pildiAadress} />
     } 
     )
     }
     
     <div>
      <h2>Milliseid linnu tahaksid külastada?</h2>
      <div>
        <button onClick={klikkLisaLinn} type='button'>Lisa linn</button>
        </div>
      </div>
    </div>
  );
}

export default App;
