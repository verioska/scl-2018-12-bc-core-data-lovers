const datos= Object.values(LOL.data);
const imagenfinal=[]
const imagenfinalZA=[]
const categoria=[]
let informacion=[];


function filter (datos,condition) {
   

   const categoria=datos.filter(tipos =>{
    return tipos.tags.indexOf(condition)!==-1;
    });
    console.log(categoria)
    return categoria;

 }
 
function ordenar(datos){
    let resultado=[];
    for(let i=0; i<datos.length; i++){
       resultado.push(datos[i]["id"]); 
       imagenfinal.push(datos[i]["splash"]); 
       
       } 
let ordenado = resultado.sort();
return resultado;
}



function ordenarZA(datos){
    let resultado=[];
    
   for(let i=0; i<datos.length; i++){
       resultado.push(datos[i]["id"]); 
        imagenfinalZA.push(datos[i].splash);
       
      }  
let reverso = resultado.reverse();
imagenfinalZA.reverse()

return resultado;
}


function informacionPer(datos){
   let attackArray =[];
   
   for (let i=0;i<datos.length;i++){

        let informacion1=datos[i].info.attack;
        attackArray.push(informacion1);
   }
return attackArray;
}

function infoDefene(dato){
   let defenseArray=[];
   for (let i=0;i<datos.length;i++){
      let infoDefene=datos[i].info.defense;
      defenseArray.push(infoDefene);
}
return defenseArray;
}

function infoMagic(datos){
    let magicArray=[];
    for (let i=0;i<datos.length;i++){
    let infoMagic=datos[i].info.magic;
    magicArray.push(infoMagic);
}
return magicArray
}

function infodifficulty(datos){
   let difficultyArray=[];
   for (let i=0;i<datos.length;i++){
      let infodifficulty=datos[i].info.difficulty;
       difficultyArray.push(infodifficulty)
}
return  difficultyArray;
}


