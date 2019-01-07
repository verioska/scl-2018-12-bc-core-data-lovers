document.addEventListener('DOMContentLoaded', function(){
  M.AutoInit();
});


window.onload =() =>{

  document.getElementById("page3").style.display="none";

  document.getElementById("start").addEventListener("click",
  (event) => {
    event.preventDefault();
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
    
    showCards(datos);
  })

  function showCards(datos) {
    document.getElementById('championsList').innerHTML = '';
    for (let i = 0; i < datos.length; i++) {
      document.getElementById('championsList').innerHTML += `
      <div class="col s6 m3" >
        <div class="card">
          <img class="imagen-lol responsive-img" src="${datos[i].splash}" >
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-2"><h6>${datos[i].name}</h6><i class="material-icons right">more_vert</i></span>
            </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${datos[i].name}<i class="material-icons right">close</i></span>
            <p> Ataque: ${ datos[i].info.attack }</p>
            <p> Defensa: ${ datos[i].info.defense }</p>
            <p> Magia: ${ datos[i].info.magic }</p>
            <p> Dificultad: ${ datos[i].info.difficulty }</p>
            <span class="link" data-champion='${datos[i].id}'>Ver mas</span>
        </div>
      </div>`  
    }
    const links = document.getElementsByClassName('link');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.srcElement.dataset.champion;
        showDetail(id);
      });
    }
  }
  function showDetail(id) {
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="block";
    let championDetail = findChampion(id);
    document.getElementById("championDetail").innerHTML += `
  <div class="col s6 m3" >
      <div class="card">
        <img class="imagen-lol responsive-img" src="${championDetail.splash}" >
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-2"><h6>${championDetail.name}</h6><i class="material-icons right">more_vert</i></span>
          </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${championDetail.name}<i class="material-icons right">close</i></span>
          <p> Ataque: ${ championDetail.info.attack }</p>
          <p> Defensa: ${ championDetail.info.defense }</p>
          <p> Magia: ${ championDetail.info.magic }</p>
          <p> Dificultad: ${ championDetail.info.difficulty }</p>
          <span class="link" data-champion='${championDetail.id}'>Ver mas</span>
      </div>
    </div>`  
  }
 
  document.getElementById('selectRol').addEventListener("change",()=>{
    let rol=document.getElementById('selectRol').value;
    let data=filterByRol(datos,rol);
    showCards(data);   
  });

  document.getElementById('selectOrder').addEventListener("change",()=>{
    
    let order=document.getElementById('selectOrder').value;
    let data=ordenar(datos,order);
    showCards(data);
  });

  
};