const charactersAPI = new APIHandler("http://localhost:8000")


$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(data =>{
      console.log(data.data)
    })
    .catch(e => console.log(e))

  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id)
    .then(data =>console.log(data))
    console.log(id)
    .catch(e => console.log(e))
  
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(id)
    .then(data => console.log("muerto"))
    .catch(e => console.log(e))
  }
  
  // document.getElementById('edit-character-form').onsubmit = function(){
  //   let name = document.getElementsByName("name")[0].value;
  //   let occupation = document.getElementsByName("occupation")[0].value;
  //   let weapon= document.getElementsByName("weapon")[0].value;
  //   let cartoon = document.getElementsByName("cartoon")[0].checked;
  //   let newCharacter = {name, occupation, weapon, cartoon}
  //   charactersAPI.updateOneRegister(newCharacter)
  // }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let name = document.getElementsByName("name")[0].value;
    let occupation = document.getElementsByName("occupation")[0].value;
    let weapon= document.getElementsByName("weapon")[0].value;
    let cartoon = document.getElementsByName("cartoon")[0].checked;
    let newCharacter = {name, occupation, weapon, cartoon}
    charactersAPI.createOneRegister(newCharacter)
  
    console.log("entra")
  }
})

// class Character{
//   constructor(id,name,occupation, weapon, carton){
//     this.id = id;
//     this.name = name;
//     this.image = image;
//     this.occupation = occupation;
//     this.weapon = weapon;
//     this.carton = carton;
//   }
// }

function character(){

}
