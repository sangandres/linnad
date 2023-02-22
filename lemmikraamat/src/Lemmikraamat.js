import pilt from "./Pet.jpg"
function Lemmikraamat() {
    const pealkiri = <span className="pealkiri">"Moskva - Petuški"</span> 
    const autor = <span className="autor">Venedikt Jerofejev</span> 
    const aasta = <span className="aasta">1969-1970</span>
    const kirjeldus = <span className="kirjeldus">Postmodernistlik pseudoautobiograafiline proosapoeem intellektuaalse alkohooliku Venja elektrirongi sõidust külla oma kallimale ja pojale</span>

    return (
        <> 
            <img className='Pilt' src={pilt} alt="pilt"/>        
            <h1>{pealkiri}</h1>
            <p>Autor: {autor}</p>
            <p>Kirjutamise aasta: {aasta}</p>
            <p>Sisu lühikirjeldus: {kirjeldus}</p>

        </>    
    )
}

export default Lemmikraamat