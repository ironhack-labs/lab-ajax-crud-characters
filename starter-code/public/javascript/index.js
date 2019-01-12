const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList().then((res) => {

      const data = res.data

      const htmlCharacters = data.map((character) => {
        return `
        <div class='character-info'>
          <div class='name'>${character.name}</div>
          <div class='occupation'>${character.occupation}</div>
          <div class='cartoon'>${character.cartoon}</div>
          <div class='weapon'>${character.weapon}</div>
        </div>
        `
      })
      $('.characters-container').html(htmlCharacters)
    });
  }
});

document.getElementById('fetch-one').onclick = function () {
  characterID = $('[name="character-id"]').val();
  charactersAPI.getOneRegister(characterID).then((res) => {

    const data = res.data

    const htmlCharacters = data.map((character) => {
      return `
      <div class='character-info'>
        <div class='name'>${character.name}</div>
        <div class='occupation'>${character.occupation}</div>
        <div class='cartoon'>${character.cartoon}</div>
        <div class='weapon'>${character.weapon}</div>
      </div>
      `
    })
    $('.characters-container').html(htmlCharacters)
  });
}

document.getElementById('delete-one').onclick = function () {
  characterID = $('[name="character-id"]').val();
  charactersAPI.deleteOneRegister(characterID).then((res) => {
    //    getElementById('delete-one'){ background }
    delete res.data
  });
}

document.getElementById('edit-character-form').onsubmit = function () {

}

document.getElementById('new-character-form').onsubmit = function () {

}

