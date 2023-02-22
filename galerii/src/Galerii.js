function Galerii({nimetus, autor, pildiAadress}) {
    return (
        <div className="kassipilt">
            <img className="kass_img" src={pildiAadress} alt={nimetus}/>
            <div className="kass-nimetus">
               Kass: {nimetus}
            <div className="kass-autor">
              Autor: {autor}
        
            </div>
            </div>
        </div>
  
    )
  }

  export default Galerii