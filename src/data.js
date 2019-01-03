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

function informacion1(datos){
  
   for (const i in datos){
 informacion.push(datos[i].info);
    
 console.log(informacion[i]["defence"])
}
 return informacion;
}
