document.addEventListener('DOMContentLoaded', function(){
  M.AutoInit();
});
const resultadofuncion=ordenar(datos);
const resultadofuncionZA=ordenarZA(datos);
//const resultinfor=informacion1(datos);

window.onload =() =>{


document.getElementById("start").addEventListener("click",
(event) => {
event.preventDefault();

document.getElementById("page1").style.display="none";
document.getElementById("page2").style.display="block";
document.getElementById('root1').innerHTML=''

for (let i = 0; i < resultadofuncion.length; i++) {
  
  
 document.getElementById('root1').innerHTML += `
  <div class="col s2 m2" >
    <div class="card">
      <img class="responsive-img" src="${imagenfinal[i]}" >
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-2"><h6>${resultadofuncion[i]}</h6><i class="material-icons right">more_vert</i></span>
       </div>
      <div class="card-reveal">
       <span class="card-title grey-text text-darken-4">${resultadofuncion[i]}<i class="material-icons right">close</i></span>
       <p> Ataque: ${ informacionPer(datos)[i]}</p>
       <p> Defensa: ${ infoDefene(datos)[i]}</p>
       <p> Magia: ${ infoMagic(datos)[i]}</p>
       <p> Dificultad: ${ infodifficulty(datos)[i]}</p>
      
    </div>
  </div>`  
}
})


//  <div class="card ">
//  <div class="col s2 m2">

//    <div class="card-image">
//      <img class="responsive-img" src="${imagenfinal[i]}" alt="" HSACE="500" VSPACE="20" width="550" >
//    </div>
//    <div class="card-title center"">
    
//      <span class="card-title center">${resultadofuncion[i]}</span>
    
//    </div>
//  </div>
// </div>
document.getElementById('select').addEventListener("change",()=>{
  document.getElementById("root1").style.display="none";
  
  document.getElementById('root').innerHTML=''
 let condicion=document.getElementById('select').value;
  for(let i=0; i<filter(datos,condicion).length;i++){
      document.getElementById('root').innerHTML +=`
      <div class="col s2 m2" >
        <div class="card">
          <img class="responsive-img" src="${filter(datos,condicion)[i]["splash"]}" >
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-2"><h6>${filter(datos,condicion)[i]["id"]}</h6><i class="material-icons right">more_vert</i></span>
           </div>
          <div class="card-reveal">
           <span class="card-title grey-text text-darken-4">${filter(datos,condicion)[i]["id"]}<i class="material-icons right">close</i></span>
           <p> Ataque:</p>
           <p> Defensa: </p>
           <p> Magia: </p>
           <p> Dificultad: </p>
          
        </div>
      </div>` 

 }
});


// `
//       <div class="card ">
//       <div class="col s2 m2">
     
//         <div class="card-image">
//           <img class="responsive-img" src="${filter(datos,condicion)[i]["splash"]}" alt="" HSACE="10" VSPACE="20" width="10" >
//         </div>
//         <div class="card-title center"">
          
//           <span class="card-title center">${filter(datos,condicion)[i]["id"]}</span>
          
//         </div>
//       </div>
//     </div> `


document.getElementById('select3').addEventListener("change",()=>{
  document.getElementById('root').innerHTML=''
  document.getElementById("root1").style.display="none";

if(document.getElementById('select3').value==="a-z" ){
document.getElementById('root').innerHTML=''
  for (let i = 0; i < resultadofuncion.length; i++) {
   // for (let i = 0; i < imagenfinal.length; i++) {
   // document.getElementById('root').innerHTML += ' ' + resultadofuncion[i] + ' '; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
   document.getElementById('root').innerHTML += 
   `
     <div class="col s2 m2" >
       <div class="card">
         <img class="responsive-img" src="${imagenfinal[i]}" >
           <div class="card-content">
             <span class="card-title activator grey-text text-darken-2"><h6>${resultadofuncion[i]}</h6><i class="material-icons right">more_vert</i></span>
          </div>
         <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${resultadofuncion[i]}<i class="material-icons right">close</i></span>
          <p> Ataque: ${ informacionPer(datos)[i]}</p>
          <p> Defensa: ${ infoDefene(datos)[i]}</p>
          <p> Magia: ${ infoMagic(datos)[i]}</p>
          <p> Dificultad: ${ infodifficulty(datos)[i]}</p>
         
       </div>
     </div>`  
 
}
}

else if(document.getElementById('select3').value==="z-a"){
  document.getElementById('root').innerHTML=''
for (let i = 0; i < resultadofuncionZA.length; i++) {
  // for (let i = 0; i < imagenfinal.length; i++) {
  // document.getElementById('root').innerHTML += ' ' + resultadofuncion[i] + ' '; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
  document.getElementById('root').innerHTML += `
  <div class="col s2 m2" >
    <div class="card">
      <img class="responsive-img" src="${imagenfinalZA[i]}" >
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-2"><h6>${resultadofuncionZA[i]}</h6><i class="material-icons right">more_vert</i></span>
       </div>
      <div class="card-reveal">
       <span class="card-title grey-text text-darken-4">${resultadofuncionZA[i]}<i class="material-icons right">close</i></span>
       <p> Ataque: </p>
       <p> Defensa: </p>
       <p> Magia: </p>
       <p> Dificultad: </p>
      
    </div>
  </div>`  
}
}
});

}
// `
//   <div class="card ">
//   <div class="col s2 m2">
 
//     <div class="card-image">
//       <img class="responsive-img" src="${imagenfinalZA[i]}" alt="" HSACE="500" VSPACE="20" width="550" >
//     </div>
//     <div class="card-title center"">
      
//       <span class="card-title center">${resultadofuncionZA[i]}</span>
      
//     </div>
//   </div>
// </div>
// `