const naves = 6

function StarWars(rebeldes, imperio){

    var pontoImp = 0
    var pontoReb = 0

    for (var i = 0; i < naves; i++){
        var distancia = Math.round(
                            Math.sqrt( 
                                Math.pow(rebeldes[i][0] - imperio[i][0], 2) + Math.pow(rebeldes[i][1] - imperio[i][1],2)
                                )
                            )
        if (distancia <= 5){
            pontoReb++    
        } else {
            pontoImp++
        }
    }

    console.log("Pontuação da Escória Rebelde:",pontoReb)
    console.log("Pontuação do glorioso Império Galáctico:",pontoImp)

    if (pontoReb == pontoImp){
        console.log("Empate")
    } else if (pontoReb > pontoImp){
        console.log("Aliança Rebelde")
    } else if (pontoImp > pontoReb){
        console.log("Império Galáctico")
    }
}
    

function getRandomInt() {
    return Math.round(Math.random()*10)
}

function Naves(){

    var rebeldes = []
    var imperio = []

    for(var i = 0; i < naves; i++){ 
        rebeldes.push([getRandomInt(),getRandomInt()])
        imperio.push([getRandomInt(),getRandomInt()])
    }

    StarWars(rebeldes, imperio)
}

Naves()