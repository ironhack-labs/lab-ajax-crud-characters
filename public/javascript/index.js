const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    let exampleDiv = document.querySelector('.character-info')
    exampleDiv.remove()
    let parentDiv = document.getElementById('characters-container')
    parentDiv.innerText = ""
    
    charactersAPI
      .getFullList()
      .then(APIdata=>{
        for (i=0;i<APIdata.data.length;i++){
          
          
      
          let newDiv = document.createElement('div')
          newDiv.className = "character-info"
          
          let nameElement = document.createElement("div")
          nameElement.className = "name"
          nameElement.innerText = `Name: ${APIdata.data[i].name}`
          newDiv.appendChild(nameElement)
      
          let occupationElement = document.createElement('div')
          occupationElement.className = "occupation"
          occupationElement.innerText = `Occupation: ${APIdata.data[i].occupation}`
          newDiv.appendChild(occupationElement)
      
          let cartoonElement = document.createElement('div')
          cartoonElement.className = "cartoon"
          APIdata.data[i].cartoon ?
          cartoonElement.innerHTML = `Is a Cartoon? <input type="checkbox" checked disabled>   (${APIdata.data[i].cartoon})` : 
          cartoonElement.innerHTML = `Is a Cartoon? <input type="checkbox" unchecked disabled>   (false)`
          newDiv.appendChild(cartoonElement)
      
          let weaponElement = document.createElement('div')
          weaponElement.className = "weapon"
          weaponElement.innerText = `Weapon: ${APIdata.data[i].weapon}`
          newDiv.appendChild(weaponElement)
      
          parentDiv.appendChild(newDiv) 
        }
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let inputElement = document.getElementsByName('character-id')
    let characterId = inputElement[0].value
    let parentDiv = document.getElementById('characters-container')
    parentDiv.innerText = ""
    charactersAPI
      .getOneRegister(characterId)
      .then(APIdata=>{
        let newDiv = document.createElement('div')
          newDiv.className = "character-info"
          
          let nameElement = document.createElement("div")
          nameElement.className = "name"
          nameElement.innerText = `Name: ${APIdata.data.name}`
          newDiv.appendChild(nameElement)
      
          let occupationElement = document.createElement('div')
          occupationElement.className = "occupation"
          occupationElement.innerText = `Occupation: ${APIdata.data.occupation}`
          newDiv.appendChild(occupationElement)
      
          let cartoonElement = document.createElement('div')
          cartoonElement.className = "cartoon"
          cartoonElement.innerText = `Is a Cartoon? ${APIdata.data.cartoon}`
          newDiv.appendChild(cartoonElement)
      
          let weaponElement = document.createElement('div')
          weaponElement.className = "weapon"
          weaponElement.innerText = `Weapon: ${APIdata.data.weapon}`
          newDiv.appendChild(weaponElement)
      
          parentDiv.appendChild(newDiv) 
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let inputElement = document.getElementsByName('character-id-delete')
    let characterId = inputElement[0].value
    charactersAPI
      .deleteOneRegister(characterId)
      .then(x=>console.log(x.data))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    let id = event.originalTarget[0].value
    let name = event.originalTarget[1].value
    let occupation = event.originalTarget[2].value
    let weapon = event.originalTarget[3].value
    let isCartoon = event.originalTarget[4].checked

    let characterInfo = {
      name: name,
      occupation:occupation,
      weapon:weapon,
      cartoon: isCartoon
    }
    charactersAPI
      .updateOneRegister(id, characterInfo)
      .then(updatedEntry=>{
        console.log("user updated")
        let btn = document.getElementById('send-data-update')
        btn.style.backgroundColor = 'green'
        console.log(updatedEntry)
      })
      .catch(err=>{
        let btn = document.getElementById('send-data-update')
        btn.style.backgroundColor = 'red'
        console.log(err)
      })
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let name = event.originalTarget[0].value
    let occupation = event.originalTarget[1].value
    let weapon = event.originalTarget[2].value
    let isCartoon = event.originalTarget[3].checked


    charactersAPI
      .createOneRegister(name,occupation,weapon,isCartoon)
      .then(newCharacter=>{
        let btn = document.getElementById('send-data')
        btn.style.backgroundColor = 'green'
      })
      .catch(err=>{
        let btn = document.getElementById('send-data')
        btn.style.backgroundColor = 'red'
        console.log(err)
      })
    
    

    //createOneRegister()
  });
});
