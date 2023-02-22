const tervitus = (nimi) => {
console.log('Tere ' + nimi)
}
const nimed = [
'Kati',
'Mati',
'Rein'
]

console.log(nimed)

//tervitus(nimed[0])
//tervitus(nimed[1])

//for ( let nimi of nimed ) {
//    tervitus(nimi)
//}

nimed.forEach(tervitus)

const tervitused = nimed.map(  (nimi) => {'Tere ' + nimi )}
rerurn 'Tere ' + nimi
}]

console.log 