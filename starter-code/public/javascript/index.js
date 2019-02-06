const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    let htmlInfo = '';
    charactersAPI.getFullList().then((response) => {
      console.log(response);
      response.forEach((element) => {
        htmlInfo 
      += `<div class="character-info">
        <div class="id">Id: ${element.id}</div>
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="cartoon">Is it a cartoon? ${element.cartoon}</div>
        <div class="weapon">Weapon: ${element.weapon}</div>
      </div>`;
      });
      document.getElementById('characters-container').innerHTML = htmlInfo;
    });
  };

  document.getElementById('fetch-one').onclick = function () {
      let htmlInfo = '';
      charactersAPI.getOneRegister().then((element) => {
        // console.log(element);
          htmlInfo 
        += `<div class="character-info">
          <div class="id">Id: ${element.id}</div>
          <div class="name">Name: ${element.name}</div>
          <div class="occupation">Occupation: ${element.occupation}</div>
          <div class="cartoon">Is it a cartoon? ${element.cartoon}</div>
          <div class="weapon">Weapon: ${element.weapon}</div>
        </div>`;
        document.getElementById('characters-container').innerHTML = htmlInfo;
      });
  };

  document.getElementById('delete-one').onclick = function () {
    charactersAPI.deleteOneRegister();
  };

  document.getElementById('edit-character-form').onsubmit = function () {
    charactersAPI.updateOneRegister();
  };

  document.getElementById('new-character-form').onsubmit = function () {
    charactersAPI.createOneRegister();
  };
});
