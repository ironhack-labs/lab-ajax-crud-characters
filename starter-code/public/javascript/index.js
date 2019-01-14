const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  
  // fetch all
  document.getElementById('fetch-all').onclick = function(){

      charactersAPI.getFullList().then(res => {
      
        const htmlCharacters = res.data.map(character => {
          return `
          <div class="character-info">
            <div class="name">Id: ${character.id}</div>
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>
          `;
        });
        $(".characters-container").html(htmlCharacters);        
      })
 
  }
  
  // fetch one
  document.getElementById('fetch-one').onclick = function(){

    var id = document.getElementsByName("character-id")[0].value
    
    return charactersAPI.getOneRegister(id)
    .then(res => {

      const htmlCharacters = ` 
      <div class="character-info">
            <div class="name">Id: ${res.data.id}</div>
            <div class="name">Name: ${res.data.name}</div>
            <div class="occupation">Occupation: ${res.data.occupation}</div>
            <div class="weapon">Weapon: ${res.data.weapon}</div>
          </div>
      
      `
      $(".characters-container").html(htmlCharacters); 
      
    })}
  

  // delete one
  document.getElementById('delete-one').onclick = function(){

    var id = document.getElementsByName("character-id-delete")[0].value

    return charactersAPI.deleteOneRegister(id).then(

      charactersAPI.getFullList().then(res => {
      
          alert("deleted!")
      
      })
    )}
  
  // edit one 
  document.getElementById('edit-character-form').onsubmit = function(event){

    event.preventDefault();

    var insert = {
      name: document.getElementById("name_c").value,
      occupation: document.getElementById("occupation_c").value,
      weapon: document.getElementById("weapon_c").value,
    }

    var myid = document.getElementById("id_c").value

    return charactersAPI.updateOneRegister(myid, insert).then(() => {alert("updated!")})


    
  }
  
  // add new character
  document.getElementById('new-character-form').onsubmit = function(event){
    event.preventDefault();
    
    var boolean;

    if (document.getElementById("cartoon").value === "on") {boolean = true} else {boolean = false}


    var object = {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      weapon: document.getElementById("weapon").value,
      cartoon: boolean
    }

    return charactersAPI.createOneRegister(object).then(res => {console.log(res)})
   
  }
})
