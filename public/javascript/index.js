const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  let container = document.getElementsByClassName("characters-container")[0]
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    console.log(container)
    charactersAPI.getFullList()
    .then(data => {
      console.log(data) 
      data.forEach(element => {
        console.log(element)
        let div1 = document.createElement("div")
        div1.setAttribute("class", "character-info")
        let div2 = document.createElement("div")
        div2.innerHTML = `
              <div> Character Name: <span class = "amarillo">${element.name} </span> </div>
              <div> Is a cartoon?: <span class = "amarillo">${element.cartoon} </span> </div>  
              <div> Character Occupation: <span class = "amarillo">${element.occupation} </span> </div> 
              <div> Character Weapon: <span class = "amarillo">${element.weapon} </span> </div>` 
        div1.appendChild(div2)
        container.appendChild(div1)
      });
    }).catch(console.log)
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.querySelector('input[name="character-id"]').value 
    charactersAPI.getOneRegister(id)
    .then(element => {
      let div1 = document.createElement("div")
      div1.setAttribute("class", "character-info")
      let div2 = document.createElement("div")
      div2.innerHTML = `
            <div> Character Name: <span class = "amarillo">${element.name} </span> </div>
            <div> Is a cartoon?: <span class = "amarillo">${element.cartoon} </span> </div>  
            <div> Character Occupation: <span class = "amarillo">${element.occupation} </span> </div> 
            <div> Character Weapon: <span class = "amarillo">${element.weapon} </span> </div>` 
      div1.appendChild(div2)
      container.appendChild(div1)
    }).catch(console.log)

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});