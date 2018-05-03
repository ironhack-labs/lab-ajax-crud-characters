// const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


 
  document.getElementById('fetch-all').onclick = function(){
    console.log('clicked!!')
    axios.get("/characters")
    .then(character => {
      $('.characters-container').empty();
      character.data.forEach(oneCharacter => {
         $(".characters-container").append(
          `<div class = "character-info">
          <h3> Name: ${oneCharacter.name} </h3>
          <p> Occupation: ${oneCharacter.occupation} </p>
          <p> Weapon: ${oneCharacter.weapon} </p>
          <p> Cartoon: ${oneCharacter.cartoon} </p>
          </div>
          `
         )
      });
  }
)}

  document.getElementById('fetch-one').onclick = function(){
    const charId = $("input[name=character-id]").val()
    axios.get(`/characters/${charId}`)
    .then(character => {
      $('.characters-container').empty();
         $(".characters-container").append(
          `<div class = "character-info">
          <h3> Name: ${character.data.name} </h3>
          <p> Occupation: ${character.data.occupation} </p>
          <p> Weapon: ${character.data.weapon} </p>
          <p> Cartoon: ${character.data.cartoon} </p>
          </div>
          `
         )
      
  }
)}
  
  document.getElementById('delete-one').onclick = function(){
        // did it with express in app.js
  }
  
  document.getElementById('update-data').onclick = function(e){
    e.preventDefault();
    
    const charId = $(".chr-id").val()
    const charInfo = {
        id: charId,
        name: $(".editname").val(),
        occupation: $(".editocc").val(),
        weapon: $(".editweap").val(),
        cartoon:$(".editcartoon").val()
    }
    
    axios.post(`/characters/edit`, charInfo)
    .then(response => {
        console.log("success",charInfo)
    })
    .catch(err => {
        console.log(err);
    })

  //   $(".chr-id").change(function(){
  //     const charId = $("input[name=chr-id]").val()
  //     axios.get(`/characters/${charId}`)
  //     .then(response => {
  //        $("input[name=name]").val(response.data.name)
  //         $("input[name=occupation]").val(response.data.occupation)
  //         $("input[name=cartoon]").val(response.data.weapon)
  //     })
  //     .catch( err => {
  //         console.log(err)
  //     })
  // })


}//end click
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }



  
})
