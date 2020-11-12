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
          divName.classList.add("name")
          divInfo.appendChild(divName)
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
