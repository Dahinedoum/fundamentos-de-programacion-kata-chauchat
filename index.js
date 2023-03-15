const cargador = ["pium!","pium!","pium!","pium!","pium!",
"pium!","pium!","pium!","pium!"]; 

let ramita = Math.floor(Math.random() * 7);
let pillada = "Illo, me he quedao pillá!";

for (let i = 0; i <= cargador.length; i++) {
   
    if(i % 3 === 0){
        console.log(" ")
    }
    
    else if( i === ramita){
        console.log(pillada)
    }
    
    console.log(cargador[i])
}


