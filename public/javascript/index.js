const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  event.preventDefault()
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(apiRes => {
      console.log(apiRes)
      apiRes.data.forEach(element => {
        document.getElementsByClassName("characters-container")[0].innerHTML +=
          `<div class="character-info">
            <div class="name">${element.name}</div>
            <div class="occupation">${element.occupation}</div>
            <div class="cartoon">${element.cartoon}</div>
            <div class="weapon">${element.weapon}</div>
          </div>`
      })
    }).catch(function (err) {
      console.log(err)
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const getId = document.querySelector("input[name='character-id']")
    charactersAPI.getOneRegister(getId.value).then(apiRes => {
      console.log(apiRes)
      document.getElementsByClassName("characters-container")[0].innerHTML = ""
      document.getElementsByClassName("characters-container")[0].innerHTML +=
        `<div class="character-info">
            <div class="name">${apiRes.data.name}</div>
            <div class="occupation">${apiRes.data.occupation}</div>
            <div class="cartoon">${apiRes.data.cartoon}</div>
            <div class="weapon">${apiRes.data.weapon}</div>
         </div>`
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteId = document.querySelector("input[name='character-id-delete']")
    charactersAPI.deleteOneRegister(deleteId.value).then(apiRes => {
      console.log(apiRes)
      document.getElementsByClassName("characters-container")[0].innerHTML +=
        `<div class="character-info">
            <div class="name">${apiRes.data.name}</div>
            <div class="occupation">${apiRes.data.occupation}</div>
            <div class="cartoon">${apiRes.data.cartoon}</div>
            <div class="weapon">${apiRes.data.weapon}</div>
         </div>`
    })
  });

  document.getElementById("new-character-form").addEventListener('submit', function (event) {
    event.preventDefault()
    const newCharact = {
      name: document.querySelector("#new-character-form input[name='name']").value,
      occupation: document.querySelector("#new-character-form input[name='occupation']").value,
      weapon: document.querySelector("#new-character-form input[name='weapon']").value,
      cartoon: document.querySelector("#new-character-form input[name='cartoon']").checked
    };
    console.log(newCharact)
    charactersAPI.createOneRegister(newCharact)
      .then((res) => console.log("Great! Your character is created."))
      .catch((err) => console.log("You've made a mistake somewhere..."));
  });

  document.getElementById("edit-character-form").addEventListener('submit', function (event) {
    event.preventDefault()
    const id = document.querySelector("#edit-character-form input[name='chr-id']").value;
    const newCharact = {
      name: document.querySelector("#edit-character-form input[name='name']").value,
      occupation: document.querySelector("#edit-character-form input[name='occupation']").value,
      weapon: document.querySelector("#edit-character-form input[name='weapon']").value,
      cartoon: document.querySelector("#edit-character-form input[name='cartoon']").checked
    };
    charactersAPI.updateOneRegister(id, newCharact)
      .then((res) => updateOne("Great! Your character is modified."))
      .catch((err) => updateOne("You've made a mistake somewhere..."));
  });

});