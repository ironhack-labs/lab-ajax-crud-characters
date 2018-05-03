
$(document).ready(function(){  

  var idCount = 0;

  $("#fetch-one").click(function(){
  const characterId = $('#fetch-one-input').val();
    axios.get(` http://localhost:3000/characters/${characterId}`)
    .then(response => {
      $('.characters-container').empty();
      $('.characters-container').append(`
      <div class="character-info">
      <div class="id">Id:<span>${response.data.id}</span></div>
      <div class="name">Name:<span>${response.data.name}</span></div>
      <div class="occupation">Occupation:<span>${response.data.occupation}</span></div>
      <div class="cartoon">Is a Cartoon?:<span>${response.data.cartoon}</span></div>
      <div class="weapon">Weapon:<span>${response.data.weapon}</span></div>
      </div>
        `)

      })
    
    .catch(err => {
        console.log(err);
    })
  })
 

  $("#fetch-all").click(function(){
    axios.get(` http://localhost:3000/characters/`)
    .then(response => {
      $('.characters-container').empty();
      response.data.forEach(function(oneCharacter, id){
        $('.characters-container').append(`
        <div class="character-info">
        <div class="id">Id:<span>${oneCharacter.id}</span></div>
        <div class="name">Name:<span>${oneCharacter.name}</span></div>
        <div class="occupation">Occupation:<span>${oneCharacter.occupation}</span></div>
        <div class="cartoon">Is a Cartoon?:<span>${oneCharacter.cartoon}</span></div>
        <div class="weapon">Weapon:<span>${oneCharacter.weapon}</span></div>
        </div>
        `)
         idCount = parseInt(oneCharacter.id) + 1
    
        
      })
    })
    
    .catch(err => {
        console.log(err);
    })
  })

  $("#delete-one").click(function(){
    const characterId = $('#character-id-delete').val();
      axios.delete(` http://localhost:3000/characters/${characterId}`)
      .then(response => {
        $('.characters-container').empty();
        $( "#delete-one" ).css( "background-color", "green");

  
        })
      
      .catch(err => {
        $( "#delete-one" ).css( "background-color", "red")
        console.log(err);
      })
    })

  $(".new-character-button").click(function(){
    if ($('.create-cartoon').is(':checked')) {
      isCartoon = true;
    }else{
      isCartoon = false;
    }
    const newCharacter = {
      id: idCount,
      name: $('.create-name').val(),
      occupation: $('.create-occupation').val(),
      cartoon: isCartoon,
      weapon: $('.create-weapon').val(),
    }
    
    axios.post(` http://localhost:3000/characters/`, newCharacter)
    .then(response => {
      $( ".new-character-button" ).css( "background-color", "green")
      })
    
    .catch(err => {
        console.log(err);
        $( ".new-character-button" ).css( "background-color", "red")
    })

    axios.get(` http://localhost:3000/characters/`)
    .then(response => {
      $('.characters-container').empty();
      response.data.forEach(function(oneCharacter, id){
        $('.characters-container').append(`
        <div class="character-info">
        <div class="id">Id:<span>${oneCharacter.id}</span></div>
        <div class="name">Name:<span>${oneCharacter.name}</span></div>
        <div class="occupation">Occupation:<span>${oneCharacter.occupation}</span></div>
        <div class="cartoon">Is a Cartoon?:<span>${oneCharacter.cartoon}</span></div>
        <div class="weapon">Weapon:<span>${oneCharacter.weapon}</span></div>
        </div>
        `)
         idCount = parseInt(oneCharacter.id) + 1
    
        
      })
    })

  })

  $("#edit-character-button").click(function(){
    if ($('.edit-cartoon').is(':checked')) {
      isCartoon = true;
    }else{
      isCartoon = false;
    }

    const characterId = $('.edit-id').val();
    const editCharacter = {
      name: $('.edit-name').val(),
      occupation: $('.edit-occupation').val(),
      cartoon: isCartoon,
      weapon: $('.edit-weapon').val(),
    }
    console.log(editCharacter)
    
    axios.put(` http://localhost:3000/characters/${characterId}`, editCharacter)
    .then(response => {
      $( "#edit-character-button" ).css( "background-color", "green")
      })
    
    .catch(err => {
        console.log(err);
        $( "#edit-character-button" ).css( "background-color", "red")
    })

    axios.get(` http://localhost:3000/characters/`)
    .then(response => {
      $('.characters-container').empty();
      response.data.forEach(function(oneCharacter, id){
        $('.characters-container').append(`
        <div class="character-info">
        <div class="id">Id:<span>${oneCharacter.id}</span></div>
        <div class="name">Name:<span>${oneCharacter.name}</span></div>
        <div class="occupation">Occupation:<span>${oneCharacter.occupation}</span></div>
        <div class="cartoon">Is a Cartoon?:<span>${oneCharacter.cartoon}</span></div>
        <div class="weapon">Weapon:<span>${oneCharacter.weapon}</span></div>
        </div>
        `)
         idCount = parseInt(oneCharacter.id) + 1
    
        
      })
    })
  })

});
