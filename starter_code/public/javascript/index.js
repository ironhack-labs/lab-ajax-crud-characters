const charactersAPI = new APIHandler("http://localhost:8000")

function objectifyForm(formArray) {
  let returnArray = {};
  for (let i = 0; i < formArray.length; i++) {
    if (formArray[i]["name"] !== "chr-id")
      returnArray[formArray[i]["name"]] = formArray[i]["value"];
    else returnArray.id = formArray[i]["value"];
    if (formArray[i]["name"] === "cartoon") returnArray.cartoon = true;
    else returnArray.cartoon = false;
  }
  return returnArray;
}




function showCharacter (characters){
  $('.characters-container').html('')
      for (let i=0; i<characters.length; i++){
        $('.characters-container').append(`
        <div class="character-info">
        <div class="name">${characters[i].name}</div>
        <div class="occupation">${characters[i].occupation}</div>
        <div class="cartoon"> ${characters[i].cartoon}</div>
        <div class="weapon">${characters[i].weapon}</div>
        </div>        
        `)
      }
}


$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    console.log("fetch-all");
    charactersAPI.getFullList()
    .then(characters=>{
      showCharacter(characters);
      // $('.characters-container').html('')
      // for (let i=0; i<characters.length; i++){
      //   $('.characters-container').append(`
      //   <div class="character-info">
      //   <div class="name">${characters[i].name}</div>
      //   <div class="occupation">${characters[i].occupation}</div>
      //   <div class="cartoon"> ${characters[i].cartoon}</div>
      //   <div class="weapon">${characters[i].weapon}</div>
      //   </div>        
      //   `)
      // }
    })

  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister($('input[name="character-id"]').val())
    .then(character=>{

      showCharacter([character]);
    })

  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister($('input[name="character-id-delete"]').val())
    // .then(character=>{
    //   showCharacter([character]);
    // })
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    let char = objectifyForm($(this).serializeArray());
    console.log(char);
    charactersAPI.updateOneRegister(char);
          
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let char = objectifyForm($(this).serializeArray());
    
    charactersAPI.createOneRegister(char);
    console.log(char);
  }
})
