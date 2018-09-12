const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = async function(){
      let result = await charactersAPI.getAllCharacters();
      result = result.data;

      let characters = result.map( ch => {
        return `<div class="char-info">
                <div class="id"><span>ID:</span> <span>${ch.id}</span></div>
                <div class="name"><span>NAME:</span> <span>${ch.name}</span></div>
                <div class="occupation"><span>OCCUPATION:</span> <span>${ch.occupation}</span></div>
                <div class="cartoon"><span>CARTOON:</span> <span>${ch.cartoon}</span></div>
                <div class="weapon"><span>WEAPON:</span> <span>${ch.weapon}</span></div>
              </div>`;
      });
      let div = document.createElement('div');
      div.classList.add("wrapper");

      for(let char of characters) {
        div.innerHTML += char;
      }
      const $charSection = $(".characters");
      $charSection.html(div);

  };
  
  document.getElementById('fetch-one').onclick = async function(){

      const $id = $("#character-id").val();

      let result = await charactersAPI.getCharacterInfo($id);
      ch = result.data;

      let character = `
                <div class="char-info">
                <div class="id"><span>ID:</span> <span>${ch.id}</span></div>
                <div class="name"><span>NAME:</span> <span>${ch.name}</span></div>
                <div class="occupation"><span>OCCUPATION:</span> <span>${ch.occupation}</span></div>
                <div class="cartoon"><span>CARTOON:</span> <span>${ch.cartoon}</span></div>
                <div class="weapon"><span>WEAPON:</span> <span>${ch.weapon}</span></div>
                </div>`;

      const $charSection = $(".characters");
      $charSection.html(character);
      $("#character-id").val("");
  };
  
  document.getElementById('delete-one').onclick = async function(){
      const $id = $("#character-id-delete").val();
      const $delBtn = $("#delete-one");

      try {

          await charactersAPI.delCharacter($id);

          $delBtn.css({ background: "green"});
          $("#character-id-delete").val("");

      } catch(ex) {
          $delBtn.css("background", "red");
          $("#character-id-delete").val("");

      }

  };
  
  document.getElementById('edit-character-form').onsubmit = async function(event){
      event.preventDefault();
      const id = $("#chr-id").val();
      const name = $("#name-up").val();
      const occupation = $("#occupation-up").val();
      const weapon = $("#weapon-up").val();
      const cartoon = ($("#cartoon-up").val() === 'on') ? 'false' : 'true';
      const $addBtn = $("#send-data-up");

      try {

          const newChar = {
              id,
              name,
              occupation,
              weapon,
              cartoon
          };

          const result = await charactersAPI.editCharacter(newChar);

          $addBtn.css({ background: "green"});
          $("#chr-id").val("");
          $("#name-up").val("");
          $("#occupation-up").val("");
          $("#weapon-up").val("");
          $("#cartoon-up").val("");

      } catch(ex) {
          $addBtn.css({ background: "red"});
          $("#chr-id").val("");
          $("#name-up").val("");
          $("#occupation-up").val("");
          $("#weapon-up").val("");
          $("#cartoon-up").val("");
      }
  };
  
  document.getElementById('new-character-form').onsubmit = async function(event){
      event.preventDefault();
      const name = $("#name").val();
      const occupation = $("#occupation").val();
      const weapon = $("#weapon").val();
      const cartoon = ($("#cartoon").val() !== 'on') ? 'true' : 'false';
      console.log(cartoon);
      const $addBtn = $("#send-data");

      try {

          const newChar = {
              name,
              occupation,
              weapon,
              cartoon
          };

          const result = await charactersAPI.createCharacter(newChar);

          $addBtn.css({ background: "green"});
          $("#name").val("");
          $("#occupation").val("");
          $("#weapon").val("");
          $("#cartoon").val(false);

      } catch(ex) {
          $addBtn.css({ background: "red"});
          $("#name").val("");
          $("#occupation").val("");
          $("#weapon").val("");
          $("#cartoon").val(false);
      }
  }
});
