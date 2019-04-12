let datajson;
fetch("data/lol/lol.json")
 .then(data=>data.json())
 .then(data=>{
   datajson=Object.values(data.data);
   
 })

document.addEventListener('DOMContentLoaded', function(){
  window.M.AutoInit(); 
});

window.onload =() =>{

  document.getElementById("page3").style.display="none";
   document.getElementById("start").addEventListener("click",
  (event) => {
  event.preventDefault();
  
  document.getElementById("page1").style.display="none";
  document.getElementById("page2").style.display="block";
  document.getElementById("page4").style.display="none";
  document.getElementById("page5").style.display="none";
  showCards(datajson)
});
 
 function showCards(data) {
    const lolData=Object.values(data);
    document.getElementById("page3").style.display = "none";
    document.getElementById('root').innerHTML = '';
    document.getElementById('champions-list').innerHTML = '';
    for (let i = 0; i < lolData.length; i++) {
      document.getElementById('champions-list').innerHTML += `
       <div class="col s12 m3" >
        <div class="card">
          <img class="imagen-lol responsive-img" src="${lolData[i].splash}" >
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-2"><h6>${lolData[i].name}</h6><i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
             <span class="card-title grey-text text-darken-4">${lolData[i].name}<i class="material-icons right">close</i></span>
             <p> Ataque: ${ lolData[i].info.attack}</p>
              <p> Defensa: ${ lolData[i].info.defense}</p>
              <p> Magia: ${ lolData[i].info.magic}</p>
              <p> Dificultad: ${ lolData[i].info.difficulty}</p>
              <span class="link" data-champion='${lolData[i].id}'>Ver mas</span>
            </div>
            </div>
         </div> `
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

  function showCardsHistory(data) {
    const lolData=Object.values(data);
    document.getElementById("page3").style.display = "none";
    document.getElementById('root').innerHTML = '';
    document.getElementById('page7').innerHTML = '';
    for (let i = 0; i < lolData.length; i++) {
      document.getElementById('page7').innerHTML += `
        <div class="container">
        
        <div id="history" class="col s12 m3" >
        <div class="card">
          <img class="imagen-lol responsive-img" src="${lolData[i].splash}" >
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-2"><h6>${lolData[i].name}</h6></span>
              <span class="link linkHistory" data-champion='${lolData[i].id}'>Historia</span>
              </div>
            </div>  
          </div> 
          
        </div>
      </div>
       `
    }
    const linkshistory = document.getElementsByClassName('linkHistory');
    for (let i = 0; i < linkshistory.length; i++) {
      
      linkshistory[i].addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.srcElement.dataset.champion;
        
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "none";
        document.getElementById("page5").style.display = "none";
        document.getElementById("page7").style.display = "none";
        document.getElementById("page8").style.display = "block";
        
        fetch("https://cors-anywhere.herokuapp.com/http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/"+id+".json")
       .then(res=>res.json())
       .then(data=>{
         console.log(data)
        const datajsonapi=Object.values(data.data);
         document.getElementById('page8').innerHTML ='';
         for (let i = 0; i <datajsonapi.length; i++){ 
           document.getElementById('page8').innerHTML += `
           <p >${datajsonapi[i].lore}</p>
           <button id="close">Volver</button>
           ` 
          }
          document.getElementById("close").addEventListener("click",
          (event) => {
          event.preventDefault();
          showCardsHistory(datajson);
          document.getElementById("page7").style.display = "block";
          document.getElementById("page8").style.display = "none";
        })
      })
    })
  }
}


  function showDetail(id) {
   document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    let championDetail = window.data.findChampion(datajson, id);
    document.getElementById("champions-detail").innerHTML = `
      <div class="card large">
        <div>
          <span class="link2" data-champion='${championDetail.id}'>X</span>
          <img id="image-info" class="imagen-lol responsive-img" src="${championDetail.splash}">
          <div id="champion-name">
            <h3>${championDetail.name}</h3>
            <p id="champions-n">${championDetail.partype}<p>
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
            <div class="col s6 l3" > 
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
        document.getElementById("page2").style.display = "block";
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "none";
        showCards(datajson);
      });
    }
  }

  document.getElementById('search').addEventListener("keydown", (e) => {
    if(e.keyCode === 13){
      let condition = document.getElementById('search').value
      let datasearch = window.data.searchChamp(datajson,condition);
      showCards(datasearch);
    }
 
   });

   document.getElementById("history").addEventListener("click",
     (event) => {
       event.preventDefault();
       document.getElementById("page1").style.display = "none";
       document.getElementById("page2").style.display = "none";
       document.getElementById("page3").style.display = "none";
       document.getElementById("page4").style.display = "none";
       document.getElementById("page5").style.display = "none";
       document.getElementById("page7").style.display = "block";
      
       showCardsHistory(datajson)
       
      });

  document.getElementById('selectRol').addEventListener("change", () => {
    let condition = document.getElementById('selectRol').value;
    let datafilter = window.data.filterData(datajson, condition);
    showCards(datafilter);
  });

  document.getElementById('selectOrder').addEventListener("change", () => {

    let sortOrder = document.getElementById('selectOrder').value;
    let datasort = window.data.sortData(datajson, "id", sortOrder);
    showCards(datasort);
  });
  document.getElementById("champions").addEventListener("click",
    (event) => {
      event.preventDefault();
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "block";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page7").style.display = "none";
      document.getElementById("page8").style.display = "none";

      showCards(datajson);
    });

   document.getElementById("stats").addEventListener("click",
    (event) => {
      event.preventDefault();

      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "block";
      document.getElementById("page5").style.display = "none";
      document.getElementById("page7").style.display = "none";
      document.getElementById("page8").style.display = "none";
      showStats();
    });
    
    document.getElementById("graphic").addEventListener("click",
    (event) => {
      event.preventDefault();
      document.getElementById("root").innerHTML = "";
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page5").style.display = "block";
      document.getElementById("page7").style.display = "none";
      document.getElementById("page8").style.display = "none";
      
      new window.Chart(document.getElementById('myChart').getContext('2d'), {
          type: 'bar',
          data: {
            labels: ["Luchador", "Mago", "Asesino", "Tanque", "Soporte", "Tirador"],
              datasets: [{
                  label: "Cantidad de personaje por rol",
                  backgroundColor: '#01579b',
                  borderColor: '#01579b',
                  data: [window.data.filterData(datajson, "Fighter").length, window.data.filterData(datajson, "Mage").length,window.data.filterData(datajson, "Assassin").length,window.data.filterData(datajson, "Tank").length, window.data.filterData(datajson, "Support").length, window.data.filterData(datajson, "Marksman").length],
              }]
          },
          options: {
           fontSize:1000,
          }
      })
    });

  function showStats() {

    document.getElementById('root').innerHTML = ''
    const listAverage = window.data.computeStats(datajson);
    let image = ["assassin.jpeg", "fighter.jpeg", "mage.jpeg", "marksman.jpeg", "support.jpeg", "tank.jpeg"];
    for (let k = 0; k < listAverage.length; k++) {
      const average = listAverage[k];

      document.getElementById("root").innerHTML += `
     <section class="container" style="width:90%">
       <div class="row" >
         <div class="col s6 m3 l3">
           <img class="responsive-image" src="${image[k]}" >
         </div>
         <div class="col l9">
         <div class="row">
          
           <div   class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">Attack</div>
               <div class="col s12 m6 l6" id="result-table">${average[0]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">MP</div>
               <div class="col s12 m6 l6" id="result-table">${average[6]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">Spell block per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[12]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">Crit</div>
               <div class="col s12 m6 l6" id="result-table">${average[18]}</div>
             </div>
           </div>
         </div>

         <div class="row">
            
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">Defense</div>
               <div class="col s12 m6 l6" id="result-table">${average[1]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">MP per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[7]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">Attack range</div>
               <div class="col s12 m6 l6" id="result-table">${average[13]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">Crit per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[19]}</div>
             </div>
           </div>
         </div>
         <div class="row">
            
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">Magic</div>
               <div class="col s12 m6 l6" id="result-table">${average[2]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">Movespeed</div>
               <div class="col s12 m6 l6" id="result-table">${average[8]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">HP regen</div>
               <div class="col s12 m6 l6" id="result-table">${average[14]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">Attack damage</div>
               <div class="col s12 m6 l6" id="result-table">${average[20]}</div>
             </div>
           </div>
         </div>
         <div class="row">
            
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">Difficulty</div>
               <div class="col s12 m6 l6" id="result-table">${average[3]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">Armor</div>
               <div class="col s12 m6 l6" id="result-table">${average[9]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">HP Regen per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[15]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">Attack damage per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[21]}</div>
             </div>
           </div>
         </div>
         <div class="row">
            
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">HP</div>
               <div class="col s12 m6 l6" id="result-table">${average[4]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">Armor per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[10]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">MP Regen per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[16]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3" >
             <div class="row">
               <div class="col s12 m6 l6">Attack speed offset</div>
               <div class="col s12 m6 l6" id="result-table">${average[22]}</div>
             </div>
           </div>
         </div>
         <div class="row">
            
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">HP per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[5]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">Spell block</div>
               <div class="col s12 m6 l6" id="result-table">${average[11]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">MP Regen per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[17]}</div>
             </div>
           </div>
           <div class="col s6 m3 l3">
             <div class="row">
               <div class="col s12 m6 l6">Attack speed per level</div>
               <div class="col s12 m6 l6" id="result-table">${average[23]}</div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section> 
   <hr/>   
 `
    }
  }




  // Menu responsive


  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems);

  });
  document.getElementById("page3").style.display = "none";

  document.getElementById("champions-1").addEventListener("click",
    (event) => {
      event.preventDefault();
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "block";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page7").style.display = "none";
      document.getElementById("page8").style.display = "none";


      showCards(datajson);
    });

  document.getElementById("stats-1").addEventListener("click",
    (event) => {
      event.preventDefault();

      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "block";
      document.getElementById("page5").style.display = "none";
      document.getElementById("page7").style.display = "none";
      document.getElementById("page8").style.display = "none";

      showStats();
    });

    document.getElementById("history-1").addEventListener("click",
    (event) => {
      event.preventDefault();
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page5").style.display = "none";
      document.getElementById("page7").style.display = "block";
     
      showCardsHistory(datajson)
      
     });
    document.getElementById("graphic-1").addEventListener("click",
    (event) => {
      event.preventDefault();
      document.getElementById("root").innerHTML = "";
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page5").style.display = "block";
       new window.Chart(document.getElementById('myChart').getContext('2d'), {
          type: 'bar',
          data: {
            labels: ["Luchador", "Mago", "Asesino", "Tanque", "Soporte", "Tirador"],
              datasets: [{
                  label: "Cantidad de personaje por rol",
                  backgroundColor: '#01579b',
                  borderColor: '#01579b',
                  data: [window.data.filterData(datajson, "Fighter").length, window.data.filterData(datajson, "Mage").length,window.data.filterData(datajson, "Assassin").length,window.data.filterData(datajson, "Tank").length, window.data.filterData(datajson, "Support").length, window.data.filterData(datajson, "Marksman").length],
              }]
          },
          options: {}
      });

})
};