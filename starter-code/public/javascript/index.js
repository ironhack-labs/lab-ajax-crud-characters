const charactersAPI = new APIHandler("http://localhost:8000/characters")

$(document).ready(() => {

  //$('button').click(() => {$('input').val('')});

  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();
    $('input').val('');
  }

  document.getElementById('fetch-one').onclick = function () {
    const charID = $('input[name="character-id"]').val();
    if (charID === '') alert('Empty ID field');
    else charactersAPI.getOneRegister(charID);
    $('input').val('');
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault();
    const data = getData('new');
    if (data.name === '' || data.occupation === '' || data.weapon === '' || data.cartoon === '') alert('Empty ID field');
    else charactersAPI.createOneRegister(data, e);
    $('input').val('');
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault();
    const data = getData('edit');
    const charID = $('input[name="chr-id"]').val();
    if (charID === '') alert('Empty ID field');
    else charactersAPI.updateOneRegister(data, charID, e);
    $('input').val('');
  }

  document.getElementById('delete-one').onclick = function (e) {
    const charID = $('input[name="character-id-delete"]').val();
    if (charID === '') alert('Empty ID field');
    else charactersAPI.deleteOneRegister(charID, e);
    $('input').val('');
  }

  // const getData = (action) => {
  //   let data = {
  //     name: $(`#${action}-character-form input[name="name"]`).val(),
  //     occupation: $(`#${action}-character-form input[name="occupation"]`).val(),
  //     weapon: $(`#${action}-character-form input[name="weapon"]`).val(),
  //     cartoon: $(`#${action}-character-form input[name="cartoon"]`).is(':checked')
  //     //cartoon: $(`#${action}-character-form input[name="cartoon"]`).is(':checked') ? 'YES' : 'NO'
  //   };
  //   return data;
  // }

  const getData = (action) => {
    let data = {
      cartoon: $(`#${action}-character-form input[name="cartoon"]`).is(':checked')
    };
    if ($(`#${action}-character-form input[name="name"]`).val() !== '') {
      data.name = $(`#${action}-character-form input[name="name"]`).val();
    }
    if ($(`#${action}-character-form input[name="occupation"]`).val() !== '') {
      data.occupation = $(`#${action}-character-form input[name="occupation"]`).val();
    }
    if ($(`#${action}-character-form input[name="weapon"]`).val() !== '') {
      data.weapon = $(`#${action}-character-form input[name="weapon"]`).val();
    }
    return data;
  }






});
