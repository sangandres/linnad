import { useState } from 'react' 

function Linn({nimi, pildiAadress}) {
    const [kylastusi, setKylastusi] = useState(1); 
    
    const suurenda = () => {
        setKylastusi(kylastusi +1)
        console.log(kylastusi)
    }
    const vahenda = () => {
        setKylastusi(kylastusi -1)
        console.log(kylastusi)
    }
    
    return (
    <div className="linn-rida"> 
            <img className="linn-rida_img" src={pildiAadress} alt={nimi}/>
        <div className="linn-rida_nimi">    
            Linn: {nimi}
            <button onClick={suurenda}>+</button>
            {kylastusi}
            <button onClick={vahenda}>-</button>
        </div>
    </div>
    )
}
export default Linn