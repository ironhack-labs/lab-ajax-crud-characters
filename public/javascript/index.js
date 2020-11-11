const charactersAPI = new APIHandler('http://localhost:8000');
const baseURL = "http://localhost:8000/characters"
const singleChar = "http://localhost:8000/characters/:id"
const $charList = document.querySelector(".character-info")
const $createForm = document.querySelector("#new-character-form")
const $updateForm = document.querySelector("#edit-character-form")
const $fetchAll = document.querySelector("fetch-all")
const $getCharInput = document.querySelector("#charid")
const $getChatBtn = document.querySelector("#get-char-data")

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    function printChars(arr) {
      $charList.innerHTML = ""
      arr.forEach(element => {
        $charList.innerHTML += `
          <div class='col-12'>
            <div class="card text-white bg-success mb-3">
              <div class="card-body">
                <p class="card-text">
                Id: ${$getCharInput}
                <br/>
                Name: ${element.name}
                <br/>
                occupation: ${element.occupation}
                <br/>
                is a cartoon: ${element.cartoon}
                <br/>
                weapon: ${element.weapon}
                </p>
              </div>
              <div class="card-body">
              </div>
            </div>
          </div>
        `
      })
    }    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    function printSingleChar() {
      singleChar.innerHTML = ""
      singleChar.innerHTML = `
          <div class='col-12'>
            <div class="card text-white bg-success mb-3">
              <div class="card-body">
                <p class="card-text">
                Id: ${$getCharInput}
                <br/>
                Name: ${element.name}
                <br/>
                occupation: ${element.occupation}
                <br/>
                is a cartoon: ${element.cartoon}
                <br/>
                weapon: ${element.weapon}
                </p>
              </div>
              <div class="card-body">
              </div>
            </div>
          </div>
        `
      })  
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    function deleteOne(id) {
     const id = $getCharInput
     id.delete
     return `Character has been successfully deleted`
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
