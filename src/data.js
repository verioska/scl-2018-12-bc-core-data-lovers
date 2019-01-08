const data= Object.values(LOL.data);

function filterData(data,condition) {
    const category=data.filter(tipos =>{
    return tipos.tags.indexOf(condition)!==-1;
  });
  return category;
}
 
function sortData(data,sortBy,sortOrder){
  if(sortBy==="id" && sortOrder === "a-z" ){
    data.sort((a,b)=>{
      if(b.id>a.id){
        return -1;
      }
      if(a.id>b.id){
       return 1;
      }
      return 0;
    });
  }
  if(sortBy==="id" && sortOrder === "z-a" ){
    data.sort((a,b)=>{
     if(a.id>b.id){
        return -1;
      }
     if(b.id>a.id){
       return 1;
      }
      return 0;
    });
  }
  return data
}

function findChampion(id) {
  let championInfo;
  for(let i=0; i<data.length;i++){
    if(data[i].id===id){
     championInfo=data[i]
    }
  }
  return championInfo;
}

function computeStats(datos) {
  let tag=["Assassin","Fighter","Mage","Marksman","Support","Tank"];      
  let list_tag=[];
  
  for (let m=0;m<tag.length; m++){
      let name= tag[m];
      let categoria=filterData(datos,name);
      let p=0;
      let list= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];    
      
      for (let i=0;i<categoria.length; i++){ //en algun momento i será la cantidad maxima de campeones
          
          let champion=categoria[i] //objeto  
          
          const information1 = ((champion || {}).info); //objeto
          const information= Object.entries(information1); //array
          
          const statics1=((champion || {}).stats); //objeto
          const statics= Object.entries(statics1); //array   

          for (let j=0;j<4;j++){
              let n=information[j][1];
              list[j]+=n;                         
          }
          for (let j=4;j<20;j++){
              let n=statics[j][1];
              list[j]+=n;            
          }
          p+=1;        
      }
      for (let j=0;j<list.length;j++){
          let n= list[j]/p;        
          let t=n.toFixed(2);
          list[j]= t;      
      }           
      list_tag.push(list);
  }
  return list_tag;
}