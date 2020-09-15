const charactersAPI = new APIHandler();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    
    charactersAPI.getFullList()
    .then(allMinions => {
      
      let text = ''
      allMinions.data.forEach(minion => {
        text+=` <div class="character-info">
                  <div class="name">Id: <strong style="color:orange;">${minion.id}</strong></div>
                  <div class="name">Name: <strong style="color:orange;">${minion.name}</strong></div>
                  <div class="occupation">Occupation: <strong style="color:orange;">${minion.occupation}</strong></div>
                  <div class="cartoon">Is a Cartoon?: <strong style="color:orange;">${minion.cartoon}</strong></div>
                  <div class="weapon">Weapon: <strong style="color:orange;">${minion.weapon}</strong></div>
                </div>
              `})
              document.querySelector('.characters-container').innerHTML = text
             
    })
    .catch(err => console.log('error!', err))

    
    
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()

    const id = document.querySelector(".id-character").value
  
    charactersAPI.getOneRegister(id)
    .then(minion => {
      const inputInfoMinion = `
                  <div class="character-info">
                  <div class="name">Id: <strong style="color:orange;">${minion.data.id}</strong></div>
                  <div class="name">Name: <strong style="color:orange;">${minion.data.name}</strong></div>
                  <div class="occupation">Occupation: <strong style="color:orange;">${minion.data.occupation}</strong></div>
                  <div class="cartoon">Is a Cartoon?: <strong style="color:orange;">${minion.data.cartoon}</strong></div>
                  <div class="weapon">Weapon: <strong style="color:orange;">${minion.data.weapon}</strong></div>
                  </div>` 
                  document.querySelector('.characters-container').innerHTML = inputInfoMinion
                  
    }) 
    .catch(err => console.log('error!', err))

   

  });
  
  document.getElementById('delete-one').addEventListener('click', function (event) {

  event.preventDefault()

  const id = document.querySelector('.character-id-delete').value

  charactersAPI.deleteOneRegister(id)

  
  });
  
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const minionIdToEdit = document.querySelector('.edit-id').value
    const dataMinionEdit = document.querySelectorAll('#edit-character-form input') 

    const editMinion = {
      
      name:dataMinionEdit[1].value,
      occupation:dataMinionEdit[2].value,
      weapon:dataMinionEdit[3].value,
      cartoon:dataMinionEdit[4].checked
      
    }

    charactersAPI.updateOneRegister(minionIdToEdit,editMinion)

  
  });
  
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputInfoMinion = document.querySelectorAll('#new-character-form input')

    const newMinion = {
      
      name:inputInfoMinion[0].value,
      occupation:inputInfoMinion[1].value,
      cartoon:inputInfoMinion[3].checked,
      weapon:inputInfoMinion[2].value
      
    }

    charactersAPI.createOneRegister(newMinion)


  });

})
