const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#character-id').val());
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('input[name=character-id-delete]').val());
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    id = $('input[name=chr-id]').val();
    name = $('input[name=edit-name]').val();
    occupation = $('input[name=edit-occupation]').val();
    weapon = $('input[name=edit-weapon]').val();
    debt = $('input[name=edit-debt]').is(":checked");
    charactersAPI.updateOneRegister(id, name, occupation, weapon, debt);
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault()
    name = $('input[name=name]').val();
    occupation = $('input[name=occupation]').val();
    weapon = $('input[name=weapon]').val();
    debt = $('input[name=debt]').is(":checked");
    charactersAPI.createOneRegister(name, occupation, weapon, debt)
  })
})

function getCharacter(response) {
    $("#character-info-first").remove();
    const newHtml = `<div class="character-info">
    <div class="name">ID: ${response.id}</div>
    <div class="name">Name: ${response.name}</div>
    <div class="occupation">Occupation: ${response.occupation}</div>
    <div class="debt">Debt: ${response.debt}</div>
    <div class="weapon">Weapon: ${response.weapon}</div>
  </div>
    `

    $('.characters-container').append(newHtml);
}

function getCharacters(response) {
    $(".character-info").remove();
    response.map((elem) => {
      getCharacter(elem);
    })
}