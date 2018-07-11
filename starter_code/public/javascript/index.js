
//const charactersAPI = new APIHandler("http://localhost:8000")
const baseUrl = 'https://ih-crud-api.herokuapp.com/characters';

const api = new APIHandler(baseUrl);

const addCard = (ch) => {
  let container = $('.characters-container');
  let charCard = $('<div>').addClass('character-info');
  
  let keysDiv = $('<div>').addClass('character-info-keys');
  let nameKey = $('<div>').addClass('name').text('Character Name');
  let occupationKey = $('<div>').addClass('occupation').text('Character Occupation');
  let cartoonKey = $('<div>').addClass('cartoon').text('Is a Cartoon?');
  let weaponKey = $('<div>').addClass('weapon').text('Character Weapon');

  let valuesDiv = $('<div>').addClass('character-info-values');
  let name = $('<div>').addClass('name').text(ch.name).css('color','#d8b362')
  let occupation = $('<div>').addClass('occupation').text(ch.occupation).css('color','#d8b362')
  let cartoon = $('<div>').addClass('cartoon').text(ch.cartoon).css('color','#d8b362')
  let weapon = $('<div>').addClass('weapon').text(ch.weapon).css('color','#d8b362')

  keysDiv.append(nameKey);
  keysDiv.append(occupationKey);
  keysDiv.append(cartoonKey);
  keysDiv.append(weaponKey);
  valuesDiv.append(name);
  valuesDiv.append(occupation);
  valuesDiv.append(cartoon);
  valuesDiv.append(weapon);
  charCard.append(keysDiv);
  charCard.append(valuesDiv);
  container.append(charCard);
}

const drawChars=(chars)=>{
  for (let i = 0; i < chars.length; i++)
    addCard(chars[i]);
}

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    api.getFullList()
    .then(data => {
      $('.characters-container').empty();
      drawChars(data.data);
    })
    .catch(err => console.error(err))
  }

  document.getElementById('fetch-one').onclick = function () {
    api.getOneRegister($('#fetch-one').prev('input').val())
    .then(data => {
      $('.characters-container').empty();
      addCard(data.data);
    })
    .catch(err => console.error(err))
  }

  document.getElementById('delete-one').onclick = function () {
    console.log('borrando character...')
    api.deleteOneRegister($('#delete-one').prev('input').val())
    .then(()=>{
      //drawing the list of chars
      api.getFullList()
      .then(data => {
        $('.characters-container').empty();
        drawChars(data.data);
      })
      .catch(err => console.error(err))
    })
    .catch(err => console.error(err))

  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault();
    let newChar = $('#edit-character-form').serializeArray()
      .reduce((a, x) => ({ ...a, [x.name]: x.value }), {});
    api.updateOneRegister(newChar['chr-id'], newChar)
      .then(() => console.log('Character edited!!'))
      .catch(err => console.error(err))
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault();
    let newChar = $('#new-character-form').serializeArray()
      .reduce((a, x) => ({ ...a, [x.name]: x.value }), {});
    console.log(newChar);
    api.createOneRegister(newChar)
      .then(data => console.log(data.data))
      .catch(err => console.error(err))
  }
})
