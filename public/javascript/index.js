const charactersAPI = new APIHandler('http://localhost:8000');



const charactersContainer = document.querySelector(".characters-container");


window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    fetchAll(event);

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    fetchOne(event);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    deleteOne(event);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

//-------------------------Iteration 3--------------------------------

// Fetch All
function createCard(character) {
  return `
  <div class="character-info">
    <div class="id">Id: ${character.id}</div>
    <div class="name">Name: ${character.name}</div>
    <div class="occupation">Character Occupation: ${character.ocupation}</div>
    <div class="cartoon">Is a Cartoon: ${character.cartoon}</div>
    <div class="weapon">Character Weapon: ${character.weapon}</div>
  </div>`;
};


const fetchAll = function(event) {
  charactersAPI
    .getFullList()
    .then((result)=>{
      //console.log(result);
      
      const characters = result.data;
      console.log(characters);

      characters.map((el) => {
        return charactersContainer.innerHTML += createCard(el);
      });
    })
    .catch((err)=>{
      console.log(err);
    });
}

//---------------- Fetch One--------------------
const inputOne = document.getElementById('inputOne');

const fetchOne = function(event) {
  //const idInput = event.target.value;
  const idInput = inputOne.value;
  console.log(idInput);

  charactersAPI
    .getOneRegister(idInput)
    .then((result)=>{
      //console.log(result.data);
      return charactersContainer.innerHTML = createCard(result.data);
    })
    .catch((err)=>{
      console.log(err);
    });
};

//----------------Delete One---------------------
const deleteInput = document.getElementById("delete");

function deleteOne(event) {
  const inputValue = deleteInput.value;

  charactersAPI
    .deleteOneRegister(inputValue)
    .then(()=>{
      fetchAll();
      document.getElementById('delete-one').style.backgroundColor = 'green';
    })
    .catch((err)=>{
      console.log(err);
      document.getElementById('delete-one').style.backgroundColor = 'red';
    });
}


