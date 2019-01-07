const datos= Object.values(LOL.data);

function filterByRol(datos,condition) {
     const categoria=datos.filter(tipos =>{
     return tipos.tags.indexOf(condition)!==-1;
   });
  
 return categoria;
}
 
function ordenar(datos,order){
  return ( order === "a-z" ? datos.sort() : datos.reverse() );
}

function findChampion(id) {
  let championInfo;
  for(let i=0; i<datos.length;i++){
      if(datos[i].id===id){
        championInfo=datos[i]
      }
  }
  return championInfo;
}