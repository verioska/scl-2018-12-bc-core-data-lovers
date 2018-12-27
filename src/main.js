document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    
});


const ordenar1 = document.getElementById("ordenar1");
const ordenar2 = document.getElementById("ordenar2");
const resultadofuncion=ordenar(datos);
const resultadofuncionZA=ordenarZA(datos);
//const imagenfinal=imagen(datos1);

//const resultadofuncionZA=ordenarZA(datos);

ordenar1.addEventListener("click",function(){
  ordenado.style.display = "none";
  ordenar(datos)
  
  document.getElementById('ordenado').innerHTML = ''
  document.getElementById('root').innerHTML=''
    for (let i = 0; i < resultadofuncion.length; i++) {
     // for (let i = 0; i < imagenfinal.length; i++) {
      document.getElementById('ordenado').innerHTML += ' ' + resultadofuncion[i] + ' '; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
     document.getElementById('root').innerHTML += `
     <div class="card ">
     <div class="col s2 m2">
    
       <div class="card-image">
         <img class="responsive-img" src="${imagenfinal[i]}" alt="" HSACE="500" VSPACE="20" width="550" >
       </div>
       <div class="card-title center"">
         
         <span class="card-title center">${resultadofuncion[i]}</span>
         
       </div>
     </div>
   </div>
   `
}
 // document.getElementById('root').innerHTML = ''; // limpio el div cada vez que se hace click
// document.getElementById('root').innerHTML += '<p>' + resultadoNombres[i] + '</p>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.

  });

ordenar2.addEventListener("click",function(){
  ordenado.style.display = "none";

  ordenarZA(datos);
  document.getElementById('ordenado').innerHTML = ''
  document.getElementById('root').innerHTML=''
   for (let i = 0; i < resultadofuncionZA.length; i++) {
        // console.log(resultadofuncion[i])
        document.getElementById('ordenado').innerHTML += ' ' + resultadofuncionZA[i] + ' '; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
        document.getElementById('root').innerHTML += `
        <div class="card ">
        <div class="col s2 m2">
       
          <div class="card-image">
            <img class="responsive-img" src="${imagenfinalZA[i]}" alt="" HSACE="500" VSPACE="20" width="550" >
          </div>
          <div class="card-title center"">
            
            <span class="card-title center">${resultadofuncionZA[i]}</span>
            
          </div>
        </div>
      </div>
      `      
     }
    
  });
  document.getElementById('select').addEventListener("change",()=>{

    document.getElementById('root').innerHTML=''
   let condicion=document.getElementById('select').value
    for(let i=0; i<filter(datos,condicion).length;i++){
        document.getElementById('root').innerHTML += `
        <div class="card ">
        <div class="col s2 m2">
       
          <div class="card-image">
            <img class="responsive-img" src="${filter(datos,condicion)[i]["splash"]}" alt="" HSACE="500" VSPACE="20" width="550" >
          </div>
          <div class="card-title center"">
            
            <span class="card-title center">${filter(datos,condicion)[i]["id"]}</span>
            
          </div>
        </div>
      </div>
        
        
        `


    }
        
  });
     
    