const charactersAPI = new APIHandler();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {


    charactersAPI

     .getFullList()
      .then(response => {
        const allChar = response.data
        const allCharHtml = ''

        allChar.forEach(elm => {
          allCharHtml += `<div class="character-info">
                            <div class="name">Character Name: ${elm.name}</div>
                            <div class="occupation">Character Occupation: ${elm.occupation}</div>
                            <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
                            <div class="weapon">Character Weapon: ${elm.weapon}</div>
                          </div>`
        })

        document.querySelector('.character-info').innerHTML = allCharHtml

      })
      .catch(err => console.log('HUBO UN ERROR!', err))

  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {


const charIDvalue = document.querySelector('.operation input').value

     charactersAPI
       .getOneRegister(charIDvalue)
       .then(response => {
         const oneChar = response.data
         const oneCharHtml = ''
          oneCharHtml += `<div class="character-info">
                            <div class="name">Character Name: ${oneChar.name}</div>
                            <div class="occupation">Character Occupation: ${oneChar.occupation}</div>
                            <div class="cartoon">Is a Cartoon?: ${oneChar.cartoon}</div>
                            <div class="weapon">Character Weapon: ${oneChar.weapon}</div>
                          </div>`


         document.querySelector('.character-info').innerHTML = oneCharHtml

       })
       .catch(err => console.log('HUBO UN ERROR!', err))

  });



  document.getElementById('delete-one').addEventListener('click', function (event) {

const deleteCharIDvalue = document.querySelector('.operation delete').value //??????

    charactersAPI
      .deleteOneRegister(deleteCharIDvalue)
      .then(() => {
         document.querySelector('#delete-one')
      })
      .catch(document.querySelector('#delete-one'))

  });





  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
