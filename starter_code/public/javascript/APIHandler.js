/*jshint esversion: 6*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "GET",
      success: function (response) {
        console.log(response);
        turnDelete("");
        turnCreate("");
        turnEdit("");
        turnFetchOne("");
        getFullListJquery(response);
      },
      error: function (err) {
        console.log(err);
        turnDelete("");
        turnCreate("");
        turnEdit("");
        turnFetchOne("");
      },
    });
  }

  getOneRegister () {
      const characterId = $('.operation input').val();
      console.log("characterId",characterId);
    $.ajax({
      url: this.BASE_URL+"/characters/"+characterId,
      method: "GET",
      success: function (response) {
        console.log(response);
        turnDelete("");
        turnCreate("");
        turnEdit("");
        turnFetchOne('green');
        getOneRegisterJquery(response);
      },
      error: function (err) {
        console.log(err);
        turnDelete("");
        turnCreate("");
        turnEdit("");
        turnFetchOne('red');
      },
    });
  }

  createOneRegister () {

    var name ='#new-character-form [name=name]';
    var occupation ='#new-character-form [name=occupation]';
    var debt ='#new-character-form [name=debt]';
    var weapon ='#new-character-form [name=weapon]';
    const characterInfo = {
      name: $(name).val(),
      occupation: $(occupation).val(),
      debt:  $(debt).val(),
      weapon: $(weapon).val()
    };

    console.log("characterInfo",characterInfo);

    $.ajax({
      method: 'POST',
      url: this.BASE_URL+"/characters",
      data: characterInfo,
      success: function (response) {
        console.log(response);
        turnDelete("");
        turnEdit("");
        turnFetchOne("");
        turnCreate('green');
      },
      error: function (err) {
        console.log(err);
        turnDelete("");
        turnEdit("");
        turnFetchOne("");
        turnCreate('red');
      },
    });
  }

  updateOneRegister () {

    var id ='#edit-character-form [name=chr-id]';
    var name ='#edit-character-form [name=name]';
    var occupation ='#edit-character-form[name=occupation]';
    var debt ='#edit-character-form [name=debt]';
    var weapon ='#edit-character-form [name=weapon]';
    const characterInfo = {
      id: $(id).val(),
      name: $(name).val(),
      occupation: $(occupation).val(),
      debt:  $(debt).val(),
      weapon: $(weapon).val()
    };

    console.log("characterInfo",characterInfo);

  $.ajax({
      method: 'PATCH',
      url: this.BASE_URL+"/characters/"+characterInfo.id,
      data: characterInfo,
      success: function (response) {
        console.log(response);
        turnDelete("");
        turnCreate("");
        turnFetchOne("");
        turnEdit('green');
      },
      error: function (err) {
        console.log(err);
        turnDelete("");
        turnCreate("");
        turnFetchOne("");
        turnEdit('red');
      },
    });
  }

  deleteOneRegister () {
    const characterId = $('.delete input').val();
    console.log("characterId",characterId);
  $.ajax({
    method: "DELETE",
    url: this.BASE_URL+"/characters/"+characterId,
    success: function (response) {
      console.log(response);
      turnCreate("");
      turnEdit("");
      turnFetchOne("");
      turnDelete('green');
    },
    error: function (err) {
      console.log("err",err);
      turnCreate("");
      turnEdit("");
      turnFetchOne("");
      turnDelete('red');
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

function getOneRegisterJquery(character){

  deleteInfoCharacter();

  if(typeof(character)!=='undefined')
  {
    generateInfoCharacter(character.id,character.name,character.occupation,character.debt,character.weapon);
  }
  else {
    generateInfoCharacter();
  }
}


function turnDelete(color){
  $('#delete-one').css('backgroundColor',color);
}

function turnCreate(color){
  $('#send-data').css('backgroundColor',color);
}

function turnEdit(color){
  $('#update-data').css('backgroundColor',color);
}

function turnFetchOne(color){
  $('#fetch-one').css('backgroundColor',color);
}

function deleteInfoCharacter(){
  console.log("hi");
  $('.character-info').remove();
}

function generateInfoCharacter(id="",name="",occupation="",debt="",weapon=""){
  $('.characters-container').append($('<div>').addClass('character-info').append($('<div>').addClass('id').append($('<p>').html("Id: " + id))).append($('<div>').addClass('name').append($('<p>').html("Character Name: " + name))).append($('<div>').addClass('occupation').append($('<p>').html("Character Occupation: " + occupation))).append($('<div>').addClass('debt').append($('<p>').html("Character Debt: " + debt))).append($('<div>').addClass('weapon').append($('<p>').html("Character Weapon: " + weapon))));
}
