const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((result) => {

        //we make an axios request to the url + the searchterm

        let characterList = result.data;

        console.log(characterList);

        let theContainer = $('.characters-container');
        theContainer.html('')

        let counter = 0;

        characterList.forEach(currentItem => {

          // For each character, create a new box with character-info class 

          let newBox = $('<div></div>');
          newBox.addClass('character-info');
          newBox.append(`<h2> Name: ${currentItem.name}  </h2>`);
          newBox.append('</br>');
          newBox.append(`<h2> Occupation: ${currentItem.occupation}  </h2>`);
          newBox.append('</br>');
          newBox.append(`<h2> Weapon: ${currentItem.weapon}  </h2>`);
          newBox.append('</br>');

          theContainer.append(newBox);

          // counter++;



        })

      })
      .catch((err) => {
        console.log(err);
      })


  }

  document.getElementById('fetch-one').onclick = function () {

  }

  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function () {

  }
})
