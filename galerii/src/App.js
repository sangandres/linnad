
import './App.css';
import Galerii from './Galerii'

import cat0 from './photos/cat0.png'  
import cat1 from './photos/cat1.jpg'
import cat2 from './photos/cat2.jpg'
import cat3 from './photos/cat3.jpg'
import cat4 from './photos/cat4.jpg'


function App() {

const kassid = [
{nimetus: "miisu0" , autor: "null" , pildiAadress: cat0}, 
{nimetus: "miisu1" , autor: "üks" , pildiAadress: cat1},
{nimetus: "miisu2" , autor: "kaks" , pildiAadress: cat2},
{nimetus: "miisu3" , autor: "kolm" , pildiAadress: cat3},
{nimetus: "miisu4" , autor: "neli" , pildiAadress: cat4},
]

return (
<div className="App">
  <h1>Kassipildid</h1>
  {kassid.map((kassipilt, i) => {
return < Galerii key={i} nimetus={kassipilt.nimetus} autor={kassipilt.autor} pildiAadress={kassipilt.pildiAadress}/>
 })}
</div>
)
}
export default App