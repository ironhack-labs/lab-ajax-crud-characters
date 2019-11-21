const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/')

const inputs = document.querySelectorAll('input')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {


  });

  document.getElementById('fetch-one').onclick = () => {
    const id = inputs[0].value
    axios.get(`https://minions-api.herokuapp.com/characters/${id}`)
      .then(response => {
        const { name, occupation, weapon } = response.data
        console.log(name, occupation, weapon)
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
