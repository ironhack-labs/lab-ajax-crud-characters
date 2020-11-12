const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function(event) {
    charactersAPI.getFullList()
      .then(response => {
        var div = document.createElement("div")
        div.classList.add("character-info")
        // var p = document.createElement("p");
        // div.append("Some text", p);
        response.data.forEach(character => {

          console.log(document.querySelector('#characters').appendChild(div));
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
