const datos= Object.values(LOL.data);
const datos1=Object.values(LOL.data);
const imagenfinal=[]
const imagenfinalZA=[]
const categoria=[]

function ordenar(datos){
    let resultado=[];
    //let imagen1= [];
    
    for(let i=0; i<datos.length; i++){
       resultado.push(datos[i]["id"]); 
      imagenfinal.push(datos[i]["splash"]);
     //for(let i=0; i<imagen1.length; i++){
        // document.getElementById('root').innerHTML += `<img src="${imagen1[i]}" alt="">`
        // document.write('<img src="'+imagenfinal[i]+'" alt=" ">')
       
      }
      
      let ordenado = resultado.sort();
    console.log(imagenfinal)
    // document.getElementById("ordenado").innerHTML = (ordenado );
   // let reverso = resultado.reverse();
  //dosucument.write(reverso);
    return resultado;
    }
ordenar(datos);

// function imagen(datos1){

//  let imagen1= [];
//  for(let i=0; i<datos1.length; i++){
//    imagen1.push(datos[i]["img"]);
    //document.getElementById('root').innerHTML += `<img src="${imagen1[i]}" alt="">`
// }
// let orden=imagen1.sort();
// console.log(orden)

// return imagen1
// }
// imagen(datos1);

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
ordenarZA(datos);

function filter (datos,condition) {


  const categoria=datos.filter(tipos =>{
  return tipos.tags.indexOf(condition)!==-1;
  });
  
  console.log(categoria)
  return categoria;
  }
 
  
  
 

//const datos= LOL;
//console.log(datos) //me dice que es un objeto que contiene distintas cosas

//recorriendo el objeto
//for (const i in datos)  {
    
    // console.log(i)  //me da como el indice del objeto, como en los arreglos 0,1,2
    //   console.log(datos[i])  //entra en lo que contiene el objeto ejemplo:casa:azul entra en el color
   //    console.log(datos["type"]) // solo entra en lo que tiene type

//}

// document.write(resultado.sort() )
 //document.write(resultado.reverse())


