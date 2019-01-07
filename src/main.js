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
    document.getElementById("page3").style.display="none";
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
    document.getElementById("championDetail").innerHTML = `
      <div class="card large ">
        <div>
        <span class="link2" data-champion='${championDetail.id}'>X</span>
          <img id="image-info" class="imagen-lol responsive-img" src="${championDetail.splash}">
          <div id="champion-name">
         
          <h3>${championDetail.name}</h3>
            <p>${championDetail.partype}<p>
          </div>
       </div>
       <section class="container" style="width:95%">
          <div class="row" >
             <div class="col l12">
                <div class="row">
            
            <div   class="col l3" >
              <div class="row">
                <div class="col l6">Attack</div>
                <div class="col l6" id="attack">${championDetail.info.attack}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">MP</div>
                <div class="col l6" id="mp">${championDetail.stats.mp}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">Spell block per level</div>
                <div class="col l6" id="spellblockperlevel">${championDetail.stats.spellblockperlevel}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">Crit</div>
                <div class="col l6" id="crit">${championDetail.stats.crit}</div>
              </div>
            </div>
          </div>
          <div class="row">
              
            <div class="col l3">
              <div class="row">
                <div class="col l6">Defense</div>
                <div class="col l6" id="defense">${championDetail.info.defense}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">MP per level</div>
                <div class="col l6" id="mpperlevel">${championDetail.stats.mpperlevel}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">Attack range</div>
                <div class="col l6" id="attackrange">${championDetail.stats.attackrange}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">Crit per level</div>
                <div class="col l6" id="critperlevel">${championDetail.stats.critperlevel}</div>
              </div>
            </div>
          </div>
          <div class="row">
              
            <div class="col l3" >
              <div class="row">
                <div class="col l6">Magic</div>
                <div class="col l6" id="magic">${championDetail.info.magic}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">Movespeed</div>
                <div class="col l6" id="movespeed">${championDetail.stats.movespeed}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">HP regen</div>
                <div class="col l6" id="hpregen">${championDetail.stats.hpregen}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">Attack damage</div>
                <div class="col l6" id="attackdamage">${championDetail.stats.attackdamage}</div>
              </div>
            </div>
          </div>
          <div class="row">
              
            <div class="col l3">
              <div class="row">
                <div class="col l6">Difficulty</div>
                <div class="col l6" id="difficulty">${championDetail.info.difficulty}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">Armor</div>
                <div class="col l6" id="armor">${championDetail.stats.armor}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">HP Regen per level</div>
                <div class="col l6" id="hpregenperlevel">${championDetail.stats.hpregenperlevel}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">Attack damage per level</div>
                <div class="col l6" id="attackdamageperlevel">${championDetail.stats.attackdamageperlevel}</div>
              </div>
            </div>
          </div>
          <div class="row">
              
            <div class="col l3" >
              <div class="row">
                <div class="col l6">HP</div>
                <div class="col l6" id="hp">${championDetail.stats.hp}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">Armor per level</div>
                <div class="col l6" id="armorperlevel">${championDetail.stats.armorperlevel}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">MP Regen per level</div>
                <div class="col l6" id="mpregenperlevel">${championDetail.stats.mpregenperlevel}</div>
              </div>
            </div>
            <div class="col l3" > 
              <div class="row">
                <div class="col l6">Attack speed offset</div>
                <div class="col l6" id="attackspeedoffset">${championDetail.stats.attackspeedoffset}</div>
              </div>
            </div>
          </div>
          <div class="row">
              
            <div class="col l3">
              <div class="row">
                <div class="col l6">HP per level</div>
                <div class="col l6" id="hpperlevel">${championDetail.stats.hpperlevel}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">Spell block</div>
                <div class="col l6" id="spellblock">${championDetail.stats.spellblock}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">MP Regen per level</div>
                <div class="col l6" id="mpregenperlevel">${championDetail.stats.mpregenperlevel}</div>
              </div>
            </div>
            <div class="col l3"> 
              <div class="row">
                <div class="col l6">Attack speed per level</div>
                <div class="col l6" id="attackspeedperlevel"> ${championDetail.stats.attackspeedperlevel}</div>
              </div>
            </div>
          </div>
        </section>
      <div> 
       </div>`  //cierre tarjeta card

       const links = document.getElementsByClassName('link2');
       for (let i = 0; i < links.length; i++) {
         links[i].addEventListener('click', (event) => {
           event.preventDefault();
           document.getElementById("page2").style.display="block";
           document.getElementById("page3").style.display="none";
           showCards(datos);
         });
       }
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