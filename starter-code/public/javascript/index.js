const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    let character = charactersAPI.getFullList()
    character
      .then(data => {
        document.querySelector(".characters-container").innerHTML = "";
        data.forEach(elem => {
            document.querySelector(".characters-container").innerHTML += `
            <div class="character-info">
              <div class="name">Name: ${elem.name}</div>
              <div class="occupation">Character Occupation ${elem.occupation}</div>
              <div class="cartoon">Is a Cartoon: ${elem.cartoon}</div>
              <div class="weapon">Character Weapon: ${elem.weapon}</div>
            </div>`;
        });
      })
      .catch((err) => {
        console.log(err)
      })

  };
  
  document.getElementById('fetch-one').onclick = function(){
    document.querySelector(".characters-container").innerHTML = ""
    let id = document.querySelector("#character-id").value;
    charactersAPI.getOneRegister(id).then(elem => {
        
    document.querySelector(".characters-container").innerHTML += `
      <div class="character-info">
        <div class="name">Name: ${elem.name}</div>
        <div class="occupation">Character Occupation ${elem.occupation}</div>
        <div class="cartoon">Is a Cartoon: ${elem.cartoon}</div>
        <div class="weapon">Character Weapon: ${elem.weapon}</div>
      </div>`;
    }); 
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector(".delete input[name=character-id-delete]").value;
    charactersAPI.deleteOneRegister(id).then(document.querySelector("#delete-one").style.backgroundColor = "#008000").catch(document.querySelector("#delete-one").style.backgroundColor = "#FF000")   
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    let id = document.querySelector("#edit-character-form input[name=chr-id]").value;

    var model = {
      name: document.querySelector("#edit-character-form input[name=name]").value,
      occupation: document.querySelector("#edit-character-form input[name=occupation]").value,
      cartoon: document.querySelector("#edit-character-form input[name=cartoon]").checked,
      weapon: document.querySelector("#edit-character-form input[name=weapon]").value
    }

    charactersAPI.updateOneRegister(id, model);
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
  e.preventDefault();

   var modelo = {
        name: document.querySelector("#new-character-form input[name=name]").value,
        occupation: document.querySelector("#new-character-form input[name=occupation]").value,
        cartoon: document.querySelector("#new-character-form input[name=cartoon]").checked,
        weapon: document.querySelector("#new-character-form input[name=weapon]").value
      }

    charactersAPI.createOneRegister(modelo);

  };
});
