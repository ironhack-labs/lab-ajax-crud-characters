/*jshint esversion: 6*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "GET",
      //data: //if sending information
      success: function (response) {
        console.log(response);
        getFullListJquery(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneRegister () {
      // const characterId: $('#the-name-input').val(),
      const characterId = 2;
    $.ajax({
      url: this.BASE_URL+"/characters/"+characterId,
      method: "GET",
      //data: //if sending information
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister () {
    const characterInfo = {
      // name: $('#the-name-input').val(),
      // occupation: $('#the-occupation-input').val(),
      // debt:  $('#the-weapon-input').val(),
      // weapon: $('#the-weapon-input').val()
      name: 'test1',
      occupation: 'test1',
      debt:  true,
      weapon: 'test1'
    };

  $.ajax({
      method: 'POST',
      url: this.BASE_URL+"/characters",
      data: characterInfo,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });

  }

  updateOneRegister () {
    // const characterId: $('#the-name-input').val(),
    const characterId = 3;
    const characterInfo = {
      // name: $('#the-name-input').val(),
      // occupation: $('#the-occupation-input').val(),
      // debt:  $('#the-weapon-input').val(),
      // weapon: $('#the-weapon-input').val()
      name: 'test0',
      occupation: 'test0',
      debt:  true,
      weapon: 'test0'
    };

  $.ajax({
      method: 'PATCH',
      url: this.BASE_URL+"/characters/"+characterId,
      data: characterInfo,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  deleteOneRegister () {
    // const characterId: $('#the-name-input').val(),
    const characterId = 3;
  $.ajax({
    url: this.BASE_URL+"/characters/"+characterId,
    method: "DELETE",
    //data: //if sending information
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
  }
}

function getFullListJquery(characters){

  deleteInfoCharacter();

  if(characters.length)
  {
    characters.forEach((character)=>{
      generateInfoCharacter(character.id,character.name,character.occupation,character.debt,character.weapon);
    });
  }
  else {
    generateInfoCharacter();
  }
}

function deleteInfoCharacter(){
  console.log("hi");
  $('.character-info').remove();
}

function generateInfoCharacter(id="",name="",occupation="",debt="",weapon=""){
  $('.characters-container').append($('<div>').addClass('character-info').append($('<div>').addClass('id').append($('<p>').html("Id: " + id))).append($('<div>').addClass('name').append($('<p>').html("Character Name: " + name))).append($('<div>').addClass('occupation').append($('<p>').html("Character Occupation: " + occupation))).append($('<div>').addClass('debt').append($('<p>').html("Character Debt: " + debt))).append($('<div>').addClass('weapon').append($('<p>').html("Character Weapon: " + weapon))));
}
