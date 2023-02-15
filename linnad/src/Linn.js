function Linn(props) {
    return (
        <div className="linn-rida">
            <img className="linn-rida_img" src={props.pildiAadress} alt={props.nimi}/>
            <div className=linn-rida_nimi">
        
            Linn: {props.nimi}
            </div>
            </div>
    )
}
export default Linn