const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

    charactersAPI.getFullList()
      .then(elem => {
        $('.characters-container').empty()

        elem.data.forEach(function (elem, index, arr) {

          // Creación de los div necesarios y asignación de clases y padres/hijos

          let charContCre = document.createElement('div');
          charContCre.classList.add('character-info');
          document.querySelector('.characters-container').appendChild(charContCre);

          let nameDiv = document.createElement('div');
          nameDiv.classList.add('name');
          charContCre.appendChild(nameDiv);
          let occupationDiv = document.createElement('div');
          occupationDiv.classList.add('occupation');
          charContCre.appendChild(occupationDiv);
          let cartoonDiv = document.createElement('div');
          cartoonDiv.classList.add('cartoon');
          charContCre.appendChild(cartoonDiv);
          let weaponDiv = document.createElement('div');
          weaponDiv.classList.add('weapon');
          charContCre.appendChild(weaponDiv);

          // Relleno de los campos
          nameDiv.innerText = elem.name;
          occupationDiv.innerText = elem.occupation;
          cartoonDiv.innerText = elem.cartoon;
          weaponDiv.innerText = elem.weapon;

        })
      })
  }

  document.getElementById('fetch-one').onclick = function () {
    
    // console.log(document.getElementById('oneId').value);
    let id = document.getElementById('oneId').value

    charactersAPI.getOneRegister(id)
    .then(elem => {
        
      if (id){     
        $('.characters-container').empty()
        let charContCre = document.createElement('div');
          charContCre.classList.add('character-info');
          document.querySelector('.characters-container').appendChild(charContCre);

          let nameDiv = document.createElement('div');
          nameDiv.classList.add('name');
          charContCre.appendChild(nameDiv);
          let occupationDiv = document.createElement('div');
          occupationDiv.classList.add('occupation');
          charContCre.appendChild(occupationDiv);
          let cartoonDiv = document.createElement('div');
          cartoonDiv.classList.add('cartoon');
          charContCre.appendChild(cartoonDiv);
          let weaponDiv = document.createElement('div');
          weaponDiv.classList.add('weapon');
          charContCre.appendChild(weaponDiv);

          // Relleno de los campos
          nameDiv.innerText = elem.data.name;
          occupationDiv.innerText = elem.data.occupation;
          cartoonDiv.innerText = elem.data.cartoon;
          weaponDiv.innerText = elem.data.weapon;
      }    
    })
  }

  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function () {

  }
})
