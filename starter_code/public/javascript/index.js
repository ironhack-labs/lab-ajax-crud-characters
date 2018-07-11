const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
      .then(res => {
         display(res.data);  
      
      })
      .catch(error=>{
        console.log(error.message);
      })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})

const display =characters =>{
  const container = $(".characters-container");
         container.html("");
         characters.forEach((char) => {
           const charCont = $("<div></div>").addClass("character-info");
           const id = $("<div></div>").addClass("id").html(`ID: <span>${char.id}</span>`);
           const name = $("<div></div>").addClass("name").html(`Name: <span>${char.name}`);
           const occupation=$("<div></div>").addClass("occupation").html(`Occupation: <span>${char.occupation}</span>`);
           const cartoon=$("<div></div>").addClass("cartoon").html(`Is a Cartoon?: <span>${char.cartoon}</span>`)
           const weapon=$("<div></div>").addClass("weapon").htnml(`Weapon <span>${chan.weapon}</span>`)
           
           charCont.append(id,name,occupation,cartoon,weapon);
           container.append(charCont);
        
  });
}