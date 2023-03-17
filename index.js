







function Chauchat(disparos){

    let cargador = 7; 
    let pillada = "Illo, me he quedao pillá!";

    for (let i = 0; i <= cargador; i++) {
    
        const ramita = Math.random() > 0.8;

        if(i % 3 === 0){
            console.log(" ")
        }
        
        else if(ramita){

            console.log(pillada) 
            break

        }
        console.log("pium!");
    }

    
}

Chauchat()



// Ejercicio complementario: 

// function repetirString(String, Numero){

//     let concatenar = "";
//     for (let i=0; i < Numero; i++){

//         concatenar += String
//     }
    
//     console.log(concatenar)
//     return concatenar;
// }

// repetirString("ja", 6)
