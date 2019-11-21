const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');
const inputs = document.querySelectorAll('input')



window.addEventListener('load', () => {
let card = document.querySelector(".characters-container");

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then((minionchara) => {
        card.innerHTML = ''
      minionchara.data.forEach(el => {
     minionStat = `<div class="character-info">
          <div class="id">Id:  <span>${el.id}</span></div>
          <div class="name">Name: <span>${el.name}</span></div>
          <div class="occupation">Occupation: <span>${el.occupation}</span></div>
          <div class="cartoon">Is a Cartoon? <span>${el.cartoon}</span></div>
          <div class="weapon">Weapon <span>${el.weapon}</span></div>
        </div>`

        card.innerHTML += minionStat;
 
   });
 })
  });

document.getElementById('fetch-one').addEventListener('click', function (event) {
 const id = inputs[0].value;
    charactersAPI.getOneRegister(id)
    .then(response => {
        const {
          name,
          occupation,
          cartoon,
          weapon
        } = response.data
        console.log(name)
        console.log(occupation)
        console.log(cartoon)
       console.log(weapon)
      })
      .catch(error => console.log('error: ', error))
  


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
