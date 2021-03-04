const charactersAPI = new APIHandler('http://localhost:8000');
const

  window.addEventListener('load', () => {
    document
      .getElementById('fetch-all')
      .addEventListener('click', function (event) {
        charactersAPI.getFullList()
          .then((apiRes) => {
            console.log(apiRes.data);
            // insert apiRes.data into index.html ==> characters-container
          })
          .catch(err => {
            console.log(err);
          })
      });


    document
      .getElementById('fetch-one')
      .addEventListener('click', function (event) {
        charactersAPI.getOneRegister()
        .then((apiRes2) => {
          console.log(apiRes2.data);
          // insert apiRes.data into index.html ==> characters-container
        })
        .catch(err => {
          console.log(err);
        })
      });

    document.getElementById('delete-one').addEventListener('click', function (event) {

    });

    document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    });

    document.getElementById('new-character-form').addEventListener('submit', function (event) {

    });
  });
