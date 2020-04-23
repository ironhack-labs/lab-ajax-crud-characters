const baseUrl = 'http://localhost:8000/characters';

const charactersAPI = new APIHandler(baseUrl);

const createCharForm = (char, cContainer, del) => {
  let cDiv = document.createElement('div');
  const { id, name, occupation, cartoon, weapon } = char;
  const inHTML = `<div class="id"> Id: <span> ${id}  </span>
      <div class="name"> Name: <span> ${name}  </span> </div>
      <div class="occupation"> Occupation: <span> ${occupation}  </span> </div>
      <div class="cartoon">Is a Cartoon?: <span> ${cartoon}  </span> </div>
      <div class="weapon"> Weapon: <span> ${weapon}  </span> </div>`;
  cDiv.innerHTML = !del
    ? inHTML
    : ` ${inHTML} 
      <h4 class= "center-text"> This character has been deleted </h4> `;

  cDiv.classList.add('character-info');
  cContainer.appendChild(cDiv);
};

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async () => {
    // Get all data
    const data = await charactersAPI.getFullList();
    // Get characters-container  and clean it
    const cContainer = document.querySelector('.characters-container');
    cContainer.innerHTML = '';
    // paint character info
    data.forEach((char) => createCharForm(char, cContainer));
  });

  document.getElementById('fetch-one').addEventListener('click', async (event) => {
    // Get data
    const id = document.querySelector('#character-id').value;
    const char = await charactersAPI.getOneRegister(id);
    // Get characters-container  and clean it
    const cContainer = document.querySelector('.characters-container');
    cContainer.innerHTML = '';
    // paint character info
    createCharForm(char, cContainer);
  });

  document.getElementById('delete-one').addEventListener('click', async () => {
    event.preventDefault();
    // Get data
    const id = document.querySelector('#character-id-delete').value;
    const char = await charactersAPI.getOneRegister(id);
    // Get characters-container  and clean it
    const { err } = char;
    const cContainer = document.querySelector('.characters-container');
    cContainer.innerHTML = '';
    if (!err && id) {
      createCharForm(char, cContainer, true);
      document.getElementById('delete-one');
      await charactersAPI.deleteOneRegister(id);
      document.getElementById('delete-one').classList.add('green-bkg');
      document.getElementById('delete-one').classList.remove('red-bkg');
    } else {
      createCharForm(char, cContainer);
      document.getElementById('delete-one').classList.add('red-bkg');
      document.getElementById('delete-one').classList.remove('green-bkg');
    }
  });

  document.getElementById('edit-character-form').onsubmit = async (event) => {
    event.preventDefault();
    const [id, name, occupation, weapon, cartoon] = event.srcElement;
    let char = {
      id: id.value,
      name: name.value,
      occupation: occupation.value,
      weapon: weapon.value,
      cartoon: cartoon.checked,
    };
   await charactersAPI.updateOneRegister(char);
  };

  document.getElementById('new-character-form').onsubmit = async function (event) {
    event.preventDefault();
    const [name, occupation, weapon, cartoon] = event.srcElement;
    let char = {
      name: name.value,
      occupation: occupation.value,
      weapon: weapon.value,
      cartoon: cartoon.checked,
    };
    console.log(char);
    await charactersAPI.createOneRegister(char);
  };
});
