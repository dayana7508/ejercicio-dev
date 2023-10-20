let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "



function vocales(){
    let amount = 0;
    let minuscule = msg.toLowerCase()
    amount = minuscule.match(/[a,e,i,o,u]/g).length;
    return amount;
}

const count = vocales()
console.log(count)
