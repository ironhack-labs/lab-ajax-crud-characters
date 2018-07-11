const charactersAPI = new APIHandler("http://localhost:8000/characters")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
      .then(res => {

        let charList = ``;

        res.forEach(e => {
          charList += `<div class="character-info">`;
          charList += `<div class="char-info">`;
          charList += `<div class="name"> Name: ${e.name}</div>`;
          // $(".character-info .occupation").html(`Occupation: ${res.occupation}`);
          // if (res.cartoon){
          //   $(".character-info .cartoon").html(`Is a cartoon?: Yes`);
          // } else {
          //   $(".character-info .cartoon").html(`Is a cartoon?: No`);
          // }
          // $(".character-info .weapon").html(`Weapon: ${res.weapon}`); 
          charList += `</div>`
        });
        
        $(".characters-container").append(charList);
      console.log(res)
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let getChar = $("#get-char-id").val();

    charactersAPI.getOneRegister(getChar)
      .then(res => {
        $(".character-info .name").html(`Name: ${res.name}`);
        $(".character-info .occupation").html(`Occupation: ${res.occupation}`);
        if (res.cartoon){
          $(".character-info .cartoon").html(`Is a cartoon?: Yes`);
        } else {
          $(".character-info .cartoon").html(`Is a cartoon?: No`);
        }
        $(".character-info .weapon").html(`Weapon: ${res.weapon}`);    
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let deleteChar = $("#delete-char-id").val();
    console.log(deleteChar[- 1])

    charactersAPI.deleteOneRegister(deleteChar - 1);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){
    event.preventDefault();

    const newChar = {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      weapon: document.getElementById("weapon").value
    }; 
    
    charactersAPI.createOneRegister(newChar)

    console.log(newChar)          
  }
})
