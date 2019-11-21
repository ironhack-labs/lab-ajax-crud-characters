const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');
const inputs = document.querySelectorAll('input')



window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    let card = document.querySelector(".characters-container");
    
charactersAPI.getFullList()
      .then((minioncharacter) => {
        card.innerHTML = ''
      minioncharacter.data.forEach(elem => {
     minionStat = `<div class="character-info">
          <div class="id">Id:  <span>${elem.id}</span></div>
          <div class="name">Name: <span>${elem.name}</span></div>
          <div class="occupation">Occupation: <span>${elem.occupation}</span></div>
          <div class="cartoon">Is a Cartoon? <span>${elem.cartoon}</span></div>
          <div class="weapon">Weapon <span>${elem.weapon}</span></div>
        </div>`
        card.innerHTML += minionStat;
   });
 })


  });

  document.getElementById('fetch-one').onclick = () => {

    const id = inputs[4].value



    charactersAPI.getOneRegister(id)
        .then(response => {
            const { name, occupation, weapon, cartoon } = response.data
            inputs[0].value = name
            inputs[1].value = occupation
            inputs[2].value = cartoon
            inputs[3].value = weapon

        })
        .catch(error => console.log('error:', error))
}

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

