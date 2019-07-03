const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){


    let characters = document.querySelector(".characters-container");
    characters.innerHTML = ""

    charactersAPI
      .getFullList()
      .then(list => {
        list.forEach(character => {
          

          let characterInfo = `
 <div class="character-info">
        <div class="id">id:<span>${character.id}</span></div>
        <div class="name">name:<span>${character.name}</span></div>
        <div class="occupation">occupation:<span>${
          character.occupation
        }</span></div>
        <div class="cartoon">cartoon:<span>${
          character.cartoon
        }</span></div>
        <div class="weapon">weapon:<span>${
          character.weapon
        }</span></div>
      </div>`;

          characters.innerHTML += characterInfo;
        });
      })
      .catch(err => console.log(err));
  }
  
  document.getElementById('fetch-one').onclick = function(){
     document.querySelector(".characters-container").innerHTML = "";
    let characterId = document.querySelector("#character-id").value;
   charactersAPI
   
     .getOneRegister(characterId)
     .then(identification=> {

       
         let idInfo = `
 <div class="character-info">
        <div class="id">id:<span>${identification.id}</span></div>
        <div class="name">name:<span>${identification.name}</span></div>
        <div class="occupation">occupation:<span>${identification.occupation}</span></div>
        <div class="cartoon">cartoon:<span>${identification.cartoon}</span></div>
        <div class="weapon">weapon:<span>${identification.weapon}</span></div>
      </div>`;
     document.querySelector(".characters-container").innerHTML = idInfo;
     oneCharacter.innerHTML.value = ""
       
       
     })
     .catch(err => console.log(err));

  }
  

  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
     
         
  }


    document.getElementById("delete-one").onclick = function() {
     
    };
})






 

































//  document.querySelector("#characters-container").innerHTML = "";
//  let id = document.querySelector("#character-id");

//  charactersAPI.getOneRegister(id.value).then(element => {
//  

//    let card = `<div class="character-info">
//        <div class="name">Name: ${name}</div>
//        <div class="occupation">Occupation: ${occupation}</div>
//        <div class="cartoon">Is a Cartoon: ${x}</div>
//        <div class="weapon">Weapon: ${weapon}</div></div>`;
//    document.querySelector("#characters-container").innerHTML = card;
//    document.querySelector("#character-id").value = "";
//  });
