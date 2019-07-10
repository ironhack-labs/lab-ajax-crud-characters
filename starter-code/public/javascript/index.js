

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((result) => {

        let charList = ``;

        result.data.forEach((character) => {
          charList += `
          <div class="character-info">
          <div class="name"> ID : ${character.id}</div>
          <div class="name"> Name : ${character.name}</div>
          <div class="occupation"> Occupation : ${character.occupation}</div>
          <div class="weapon"> Weapon : ${character.weapon}</div>
          <div class="cartoon">Debt : ${character.debt}</div>
        </div>`;

          $('.characters-container').html(charList);

        })
      })
      .catch((err) => {
        console.log(err);
      })

  }

  document.getElementById('fetch-one').onclick = function () {

    let charID = $('[name="character-id"]').val();

    axios.get(`https://ih-crud-api.herokuapp.com/characters/${charID}`)
      .then((result) => {
        console.log(result.data);
        let oneChar = `<div class="character-info">
      <div class="name"> ID : ${result.data.id}</div>
      <div class="name"> Name : ${result.data.name}</div>
      <div class="occupation"> Occupation : ${result.data.occupation}</div>
      <div class="weapon"> Weapon : ${result.data.weapon}</div>
      <div class="cartoon">Debt : ${result.data.debt}</div>
    </div>`;

        $('.characters-container').html(oneChar);

      })


  }

  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault();
    let charID = $('#edit-character-form [name="chr-id"]').val();

    let updatedcharacterInfo = {
      name: $('#edit-character-form [name="name"]').val(),
      occupation: $('#edit-character-form [name="occupation"]').val(),
      debt: $('#edit-character-form [name="cartoon"]').prop("checked"),
      weapon: $('#edit-character-form [name="weapon"]').val(),
    }
    
    console.log(updatedcharacterInfo);
    
    axios.patch(`https://ih-crud-api.herokuapp.com/characters/${charID}`, updatedcharacterInfo)
    .then(response => {
          console.log('update successful: ', response);
          document.getElementById("update-form").reset();
    })
    .catch(error => {
        console.log(error);
    })

}

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault();

    let name = $('#new-character-form [name="name"]').val();
    let occupation = $('#new-character-form [name="occupation"]').val();
    let weapon = $('#new-character-form [name="weapon"]').val();
    let cartoon = $('#new-character-form [name="cartoon"]').prop("checked");
    console.log(name, occupation, weapon, cartoon);

    axios.post('https://ih-crud-api.herokuapp.com/characters', {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: cartoon
    })
      .then(() => {
        console.log('Hola Hovito');

        $('[name="name"]').val("");
        $('[name="occupation"]').val("");
        $('[name="weapon"]').val("");
        $('[name="cartoon"]').prop("checked", false);
      })
      .catch((err) => {
        console.log(err);
      })

  }
})
