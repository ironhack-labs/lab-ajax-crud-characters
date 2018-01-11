const charactersAPI = new APIHandler("http://localhost:8000/characters/");

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(r=>{
      for(char of r){
      $(".characters-container").append(
        `<div class="character-info">
        <div class="name">${char.name}</div>
        <div class="occupation">${char.occupation}</div>
        <div class="debt">${char.debt}</div>
        <div class="weapon">${char.weapon}</div>
      </div>`
      )
    }
    });
  }
  
  document.getElementById('fetch-one').onclick = function(){
    var id = document.getElementById('id-input').value;
    charactersAPI.getOneRegister(id)
    .then(char=>{
      $(".characters-container").html(
        `<div class="character-info">
        <div class="name">${char.name}</div>
        <div class="occupation">${char.occupation}</div>
        <div class="debt">${char.debt}</div>
        <div class="weapon">${char.weapon}</div>
      </div>`
      )
    });
  }
  
  document.getElementById('delete-one').onclick = function(){
        var id = document.getElementById("delete-id-input").value;
        charactersAPI.deleteOneRegister(id)
        .then(r=>{
          $("#delete-one").attr("style","background:green");
        })
        .catch(r=>{
          $("#delete-one").attr("style","background:red");
        });

  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.name.value);
    // console.log(e.target.debt.checked);
    var oneChar = {
      id:e.target.chrid.value,
      name:e.target.name.value,
      occupation:e.target.occupation.value,
      weapon:e.target.weapon.value,
      debt:e.target.debt.checked
    };
    charactersAPI.updateOneRegister(oneChar)
    .then(r=>{
      $("#edit-submit").attr("style","background:green");
    })
    .catch(r=>{
      $("#edit-submit").attr("style","background:red");
    });

  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.name.value);
    // console.log(e.target.debt.checked);
    var newChar = {
      name:e.target.name.value,
      occupation:e.target.occupation.value,
      weapon:e.target.weapon.value,
      debt:e.target.debt.checked
    };
    charactersAPI.createOneRegister(newChar)
    .then(r=>{
      $("#new-submit").attr("style","background:green");
    })
    .catch(r=>{
      $("#new-submit").attr("style","background:red");
    });
  }
})
