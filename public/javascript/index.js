const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
      
  document.getElementById('here').innerHTML = '';

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault;
    charactersAPI.getFullList()
      .then(response => {
        //console.log("response", response);

        for (let i=0; i<response.length; i++) {

          const {id, name, occupation, cartoon, weapon} = response[i]; 
            
          const characterCard = `
            <div style="text-align:left">
                <span>Id: ${id}</span> <br>
                <span>Name: ${name}</span> <br>
                <span>Occupation: ${occupation}</span> <br>
                <span>Is a Cartoon?: ${cartoon}</span> <br >
                <span>Weapon: ${weapon}</span>
            </div>
          `
          document.getElementById('here').innerHTML += characterCard;
        }
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault;

    charactersAPI.getOneRegister(id)
    .then(response => {
      

      document.getElementById('here').innerHTML = '';
        const {id, name, occupation, isAcartoon, weapon} = response;
        const id = document.getElementsByName('character-id').value;

        const characterCard = `
          <div style="text-align:left">
              <span>Id: ${id}</span> <br>
              <span>Name: ${name}</span> <br>
              <span>Occupation: ${occupation}</span> <br>
              <span>Is a Cartoon?: ${isAcartoon}</span> <br>
              <span>Weapon: ${weapon}</span>
          </div>
          `
        document.getElementById('here').innerHTML += characterCard;
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
