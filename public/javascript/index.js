const charactersAPI = new APIHandler('http://localhost:8000');



//Enseña varios
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
   updateCharactList()
    function updateCharactList() {
      charactersAPI
        .getFullList()
        .then(response => {
          let allCharact = response.data;
          let characterHtml = ''
          allCharact.forEach(elm => console.log(elm))   
          for (let i = 0; i <3; i++) {
           
            
          
           characterHtml +=  `<div class="character-info">
                                <div class="name">name:  ${allCharact[i].name}</div>
                                <div class="occupation">occupation:  ${allCharact[i].occupation}</div>
                                <div class="cartoon">Is a Cartoon?:  ${allCharact[i].cartoon} </div>
                                <div class="weapon">weapon:  ${allCharact[i].weapon}</div>
                              </div>`
            
          }
          document.querySelector('.character-container').innerHTML = characterHtml
        })

      .catch(err => console.log('HUBO UN ERROR!', err))
    }
  });


  //Enseña uno
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterIDvalue = document.querySelector('#one-character').value
    charactersAPI
      .getOneCharacter(characterIDvalue)
      .then(response => {
        let allCharact = response.data;
        console.log(allCharact)
        let characterHtml = `<div class="character-info">
                                <div class="name">name:  ${response.data.name}</div>
                                <div class="occupation">occupation:  ${response.data.occupation}</div>
                                <div class="cartoon">Is a Cartoon?:  ${response.data.cartoon} </div>
                                <div class="weapon">weapon:  ${response.data.weapon}</div>
                              </div>`
  document.querySelector('.character-container').innerHTML = characterHtml
      }) 
     .catch(err => console.log('HUBO UN ERROR!', err))
  });


    //Elimina
  document.getElementById('delete-one').addEventListener('click', function (event) {
 const characterIDvalue = document.querySelector('#one-character').value
    charactersAPI     
      .deleteOneRegister(characterIDvalue)
      .then(response => {
        let allCharact = response.data;
        console.log(allCharact)
      }) 
  });


  //Edita
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const inputs = document.querySelectorAll('#edit-character-form input')
     console.log(inputs[4].checked)
    const characterInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked,
    }

  if (characterInfo.cartoon ===true) {
      inputs[4].checked = true
    } else {
      inputs[4].checked = false
    }

    const characterIDvalue = document.querySelector('#edit-character-form .id-edit').value
    
    charactersAPI
      .updateOneRegister(characterIDvalue, characterInfo)
       

  });

    //Crea un nuevo personaje
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    const inputs = document.querySelectorAll('#new-character-form input')
     console.log(inputs[3].checked)
    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked,
    }
    if (inputs[3].checked === true) {
      characterInfo.cartoon =true
    } else {
      characterInfo.cartoon = false
    }
    
    console.log(characterInfo)
    charactersAPI
      .createOneRegister(characterInfo)
      .then(() => {
        document.querySelector('#new-character-form').reset()    
     
      
      })
       .catch(err => console.log('HUBO UN ERROR!', err))
  });
});
