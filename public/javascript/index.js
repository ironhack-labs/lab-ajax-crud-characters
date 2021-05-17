const charactersAPI = new APIHandler('http://localhost:8000');
console.log(charactersAPI);

// function displa

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    
    // I want to click and display all the info of Character 
    // I want to display them on HTML body
    // charactersAPI.getFullList()

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
