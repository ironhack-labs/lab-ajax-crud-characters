const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    const list = charactersAPI.getFullList();
    list.then(chars=>{
      console.log(chars.data);
      $('.characters-container').empty();
      chars.data.forEach(char=>{
        let nameDiv = $('<div>').addClass('name').text(`Name: ${char.name}`);
        let occupationDiv = $('<div>').addClass('occupation').text(`Occupation: ${char.occupation}`);
        let cartoonDiv = $('<div>').addClass('cartoon').text(`Is a cartoon? ${char.cartoon}`);
        let weaponDiv = $('<div>').addClass('weapon').text(`Weapon: ${char.weapon}`);
        let charactersInfo = $('<div>').addClass('character-info');
        charactersInfo.append(nameDiv);
        charactersInfo.append(occupationDiv);
        charactersInfo.append(cartoonDiv);
        charactersInfo.append(weaponDiv);
        $('.characters-container').append(charactersInfo);
      });
    }).catch(e=>console.log(e.message))
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const character = charactersAPI.getOneRegister($('input[name="character-id"]').val())
    character.then(char=>{
      console.log(char.data);
      $('.characters-container').empty();
        let nameDiv = $('<div>').addClass('name').text(`Name: ${char.data.name}`);
        let occupationDiv = $('<div>').addClass('occupation').text(`Occupation: ${char.data.occupation}`);
        let cartoonDiv = $('<div>').addClass('cartoon').text(`Is a cartoon? ${char.data.cartoon}`);
        let weaponDiv = $('<div>').addClass('weapon').text(`Weapon: ${char.data.weapon}`);
        let charactersInfo = $('<div>').addClass('character-info');
        charactersInfo.append(nameDiv);
        charactersInfo.append(occupationDiv);
        charactersInfo.append(cartoonDiv);
        charactersInfo.append(weaponDiv);
        $('.characters-container').append(charactersInfo);
    })
      .catch(e=>{
        $('.characters-container').text(`CHARACTER DOESN'T EXIST`);
        throw new Error ("Character doesn't exist");
      })
  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister($('input[name="character-id-delete"]').val());
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let formValues = $('#edit-character-form').serializeArray();
    let id= formValues[0].value;
    const obj = {
      name: formValues[1].value,
      occupation: formValues[2].value,
      weapon: formValues[3].value,
      cartoon: $('#edit-character-form input[name="cartoon"]').is(':checked')
    }

    for (var propName in obj) { 
      if (obj[propName] === '') {
        delete obj[propName];
      }
    }
    // NO LOGRO HACERLO CON LODASH obj = _.pickBy(obj, _.isEmpty());
    
    charactersAPI.updateOneRegister(obj,id)
      .then(char=>console.log(`Char ${char} updated`));
  }   
  
  
  document.getElementById('new-character-form').onsubmit = function(){
    let formValues = $('#new-character-form').serializeArray();
    const obj = {
      name: formValues[0].value,
      occupation: formValues[1].value,
      weapon: formValues[2].value,
      cartoon: $('#new-character-form input[name="cartoon"]').is(':checked')
    }

    charactersAPI.createOneRegister(obj)
      .then(char=>console.log(`New Char ${char} Created`));
  }
})
