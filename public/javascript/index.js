const charactersAPI = new APIHandler();


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterId = document.querySelector('#goya').value
    console.log(characterId)
    charactersAPI.getOneRegister(characterId)
    .then(res => console.log(res.data))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
  
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let a =
    let b = 
    let c =

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event.target)
    let a = document.querySelector('#goya-one').value;
    let b = document.querySelector('#goya-two').value;
    let c = document.querySelector('#goya-tree').value;
    //let d = document.querySelector('#goya-four').value;
    let newCar = {
      "name": a,
      "occupation": b,
      "weapon": c, 
    }
    console.log(newCar)
    charactersAPI.createOneRegister(newCar)
    .then(res => console.log(res.data))

  });
});
