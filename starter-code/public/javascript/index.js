const charactersAPI = new APIHandler("http://localhost:8000")
var characterContainer=document.querySelector(".characters-container")

/////////////////////////////////////////////////////////////////////////
function displayCharacter(chars) {
  console.log(chars);
  // loop here through each char and append the html to the desired parent Element
chars.forEach(element => {
  
  var newCharacter=document.createElement("div")
  var tpl = `<div>
    <div class="name">${element.name}</div>
    <div class="occupation">${element.occupation}</div>
    <div class="cartoon">${element.cartoon}</div>
    <div class="weapon">${element.weapon}</div>
  </div>`
newCharacter.innerHTML=tpl;
newCharacter.classList="character-info"
characterContainer.appendChild(newCharacter)
  });
// characterContainer.innerHTML=""
}
 
  
  $(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){   
     charactersAPI.getFullList("/characters")
    .then((dbRes) => displayCharacter(dbRes.data))
    .catch(dbErr => console.log(dbErr))
 }
})

///////////////////////////////////////////////////////////////////////
function displayOneCharacter(char){
  const showOneCharacter=document.createElement("div")
  const tpl = `<div>
        <div class="name">Character Name: ${char.name}</div>
         <div class="occupation">Character Occupation:${char.occupation}</div>
        <div class="cartoon">Character is cartoon ? ${char.cartoon}</div>
       <div class="weapon">character weapon${char.weapon}</div>
      </div>`

  showOneCharacter.innerHTML=tpl;
  showOneCharacter.classList="character-info"
  characterContainer.appendChild(showOneCharacter)

 }


  document.getElementById('fetch-one').onclick = function(e){
    e.preventDefault()
    const id = document.querySelector("[name=character-id]").value;
    charactersAPI.getOneRegister(id)
    .then((dbRes) => displayOneCharacter(dbRes.data))
    .catch(dbErr => console.log(dbErr))
    
  }
  
  /////////////////////////////////////////////////////////////////////////


  document.getElementById('delete-one').onclick = function(){
    const id = document.querySelector("[name=character-id-delete]").value;
    charactersAPI.deleteOneRegister(id)
    .then((dbRes) => console.log("data deleted"))
    .catch(dbErr => console.log(dbErr))
  }

  /////////////////////////////////////////////////////////////////////////
  
  document.getElementById('edit-character-form').onsubmit = function(e){
      e.preventDefault()
      const y=document.getElementById("edit-character-form").elements;
      let id=y["chr-id"].value
      let name=y["name"].value;
      let occupation=y["occupation"].value;
      let weapon=y["weapon"].value;
      let cartoon=y["cartoon"].checked;
      let characterObj = {
        name:name, 
        occupation:occupation, 
        weapon:weapon, 
        cartoon:cartoon
      }

      charactersAPI. updateOneRegister(id,characterObj)
   .then((dbRes) => console.log("data added successfully"))
    .catch(dbErr => console.log(dbErr))
   
  }

  
  /////////////////////////////////////////////////////////////////////
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    const x = document.getElementById("new-character-form").elements;
    console.log(x)
    let name = x["name"].value;
    let occupation = x["occupation"].value
    let weapon = x["weapon"].value
    let cartoon = x["cartoon"].checked
    
    let characterObj = {
        name:name, 
        occupation:occupation, 
        weapon:weapon, 
        cartoon:cartoon
   }
   console.log(characterObj)
   charactersAPI.createOneRegister(characterObj)
   .then((dbRes) => console.log("data added successfully"))
    .catch(dbErr => console.log(dbErr))
   

  console.log(characterObj)
                
  }








