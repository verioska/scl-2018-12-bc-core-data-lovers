document.addEventListener('DOMContentLoaded', function(){
  M.AutoInit();
});
const resultadofuncion=ordenar(datos);
const resultadofuncionZA=ordenarZA(datos);

window.onload =() =>{


document.getElementById("start").addEventListener("click",
(event) => {
event.preventDefault();

document.getElementById("page1").style.display="none";
document.getElementById("page2").style.display="block";
})

document.getElementById('select').addEventListener("change",()=>{

  document.getElementById('root').innerHTML=''
 let condicion=document.getElementById('select').value;
  for(let i=0; i<filter(datos,condicion).length;i++){
      document.getElementById('root').innerHTML += `
      <div class="card ">
      <div class="col s2 m2">
     
        <div class="card-image">
          <img class="responsive-img" src="${filter(datos,condicion)[i]["splash"]}" alt="" HSACE="10" VSPACE="20" width="10" >
        </div>
        <div class="card-title center"">
          
          <span class="card-title center">${filter(datos,condicion)[i]["id"]}</span>
          
        </div>
      </div>
    </div> `
}
});


}
document.getElementById('select2').addEventListener("change",()=>{


document.getElementById('root').innerHTML=''
  for (let i = 0; i < resultadofuncion.length; i++) {
   // for (let i = 0; i < imagenfinal.length; i++) {
   // document.getElementById('root').innerHTML += ' ' + resultadofuncion[i] + ' '; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
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

});