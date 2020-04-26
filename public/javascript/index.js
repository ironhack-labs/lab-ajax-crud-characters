const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', (event) => {
  event.preventDefault()
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then((apiRes) => {
        // document.querySelector('.container').innerHTML = '';
        apiRes.data.forEach((obj) => {
          document.querySelector('.characters-container').innerHTML +=
            `<div class="character-info">
            <div class = "id">id: ${obj.id} </div>
            <div class = "name">name: ${obj.name} </div> 
            <div class = "occupation">occupation: ${obj.occupation} </div> 
            <div class = "cartoon">catoon: ${obj.cartoon} </div>
            <div class = "weapon">weapon: ${obj.weapon} </div>
            </div>`
        });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  });



  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const idKey = document.querySelector("input[name='character-id']");
    charactersAPI.getOneRegister(idKey.value)
      .then(apiRes => {
        document.querySelector('.characters-container').innerHTML +=
          `<div class="character-info">
          <div class = "id">id: ${apiRes.data.id} </div>
          <div class = "name">name: ${apiRes.data.name} </div> 
          <div class = "occupation">occupation: ${apiRes.data.occupation} </div> 
          <div class = "cartoon">catoon: ${apiRes.data.cartoon} </div>
          <div class = "weapon">weapon: ${apiRes.data.weapon} </div>
          </div>`;
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  });

  

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const idKey = document.querySelector("input[name='character-id-delete']");
    charactersAPI.deleteOneRegister(idKey.value)
    .then(apiRes => {
      console.log("delete went ok", apiRes)
      document.querySelector('#delete-one').classList.add("green");
    })
    .catch(err => {
      console.log("delete error:", err)
      document.querySelector('#delete-one').classList.add("red");
    });
  });


  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const idKey = document.querySelector("input[name='chr-id']").value;
    const newCharact = {
      name: document.querySelector("#edit-character-form input[name='name']").value,
      occupation: document.querySelector("#edit-character-form input[name='occupation']").value,
      weapon: document.querySelector("#edit-character-form input[name='weapon']").value,
      cartoon: document.querySelector("#edit-character-form input[name='cartoon']").checked
    };
    
    charactersAPI.updateOneRegister(idKey, newCharact)
    .then(apiRes => {
      console.log(apiRes);
    })
   .catch(apiErr => {
     console.log(apiErr);
   });
    
  });




  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const newCharact = {
      name: document.querySelector("#new-character-form input[name='name']").value,
      occupation: document.querySelector("#new-character-form input[name='occupation']").value,
      weapon: document.querySelector("#new-character-form input[name='weapon']").value,
      cartoon: document.querySelector("#new-character-form input[name='cartoon']").checked
    };
    charactersAPI.createOneRegister(newCharact)
    .then(apiRes => {
      console.log("character created", apiRes);
    })
   .catch(apiErr => {
     console.log("error happened", apiErr);
   });

  });
});