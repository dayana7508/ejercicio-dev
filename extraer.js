let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "

let extraer = msg.match(/\bejercicios\b/)

function buscando(){
    if(extraer){
        extraer = extraer[0]
        console.log(extraer)
    }else{
        console.log('si esta')
    }
}

buscando()