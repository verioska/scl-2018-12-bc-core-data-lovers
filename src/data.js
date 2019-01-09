
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
      