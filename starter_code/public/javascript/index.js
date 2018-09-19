const charactersAPI = new APIHandler("http://localhost:8000")



const character = pj => {
  let content = `<div class="character-info">
        <div class="name">${pj.id}</div>
        <div class="name">${pj.name}</div>
        <div class="occupation">${pj.occupation}</div>
        <div class="cartoon">${pj.cartoon}</div>
        <div class="weapon">${pj.weapon}</div>
      </div>`
      $(".characters-container").append(content);
} 


  $("#fetch-all").on("click", (e) => {
    e.preventDefault();
    $(".character-info").remove()
    charactersAPI.getFullList().then(info => {
      info.forEach(e => {
        character(e);
      })
    })
  }) 
  
  $("#fetch-one").on("click", (e) => {
    e.preventDefault();
    $(".character-info").remove()
    let val=$("#characterId").val();
    console.log(val)
    if(!val || val<=0) return;
    else{
      charactersAPI.getOneRegister(val).then(e=>{
        character(e);
      })
    }
    
  });
  
  document.getElementById('delete-one').onclick = function(e){
    e.preventDefault();
    let val=$("#deleteId").val();
    console.log(val);
    if(!val || val<=0) {
      $("#delete-one").css({"color":"red"});
    }
    else{
    charactersAPI.deleteOneRegister(val)
    .then(()=>{
      $("#delete-one").css({"color":"green"})
    })
  }

  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    let valId=$("#editId").val();
    let valName=$("#editName").val();
    let valOcc=$("#editOcc").val();
    let valWeapon=$("#editWeapon").val();
    let valCartoon=$("#editCartoon").val();
    console.log(valCartoon);
    if(!valId || valId<=0) {
      return;
    }
    charactersAPI.updateOneRegister (valId, valName, valOcc, valWeapon, valCartoon);




            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let valName=$("#createName").val();
    let valOcc=$("#createOcc").val();
    let valWeapon=$("#createWeapon").val();
    let valCartoon=$("#createCartoon").val();
    charactersAPI.createOneRegister(valName,valOcc,valWeapon,valCartoon);
    
                
  }

