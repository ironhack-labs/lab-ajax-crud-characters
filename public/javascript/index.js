const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function(event) {
    charactersAPI.getFullList()
      .then(response => {
        document.querySelector('.character-info').remove()
        response.data.forEach(character => {

          let divInfo = document.createElement("div")
          divInfo.classList.add("character-info")

          let divName = document.createElement("div")
          divName.innerHTML += `Character Name:${character.name}`;
          divName.classList.add("name")


          let divOccupation = document.createElement("div")
          divOccupation.innerHTML += `Character Occupation:${character.occupation}`
          divOccupation.classList.add("occupation")

          let divCartoon = document.createElement("div")
          divCartoon.innerHTML += `Is a Cartoon?:${character.cartoon}`
          divCartoon.classList.add("cartoon")

          let divWeapon = document.createElement("div")
          divWeapon.innerHTML += `Character Carton:${character.weapon}`
          divWeapon.classList.add("weapon")



          divInfo.appendChild(divName)
          divInfo.appendChild(divOccupation)
          divInfo.appendChild(divCartoon)
          divInfo.appendChild(divWeapon)



          document.querySelector('#characters').appendChild(divInfo)
          // console.log(document.querySelector('#characters').appendChild(div));
        })
      })
      .catch(err => {
        console.log(err)
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function(event) {

  });

  document.getElementById('delete-one').addEventListener('click', function(event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function(event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function(event) {

  });
});
