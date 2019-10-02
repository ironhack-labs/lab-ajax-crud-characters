const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    const data = charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementsByName("character-id")[0].value;
    const data = charactersAPI.getOneRegister(id)
      .then(data => {
        console.log(data);        
        document.getElementsByName("chr-id")[0].value = data.data.id;
        document.getElementsByName("name")[1].value = data.data.name;
        document.getElementsByName("occupation")[1].value = data.data.occupation;
        document.getElementsByName("weapon")[1].value = data.data.weapon;
        document.getElementsByName("cartoon")[1].checked = data.data.cartoon;
        return data;
      })
      .catch(err => console.log(err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementsByName('character-id-delete')[0].value;
    const data = charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault();

    const updateChar = {
      name: document.getElementsByName('name')[1].value,
      occupation: document.getElementsByName('occupation')[1].value,
      weapon: document.getElementsByName('weapon')[1].value,
      cartoon: document.getElementsByName('cartoon')[1].value,
    };
    const id = document.getElementsByName('chr-id')[0].value;
    const data = charactersAPI.updateOneRegister(id, updateChar)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault();

    const newChar = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      weapon: document.getElementsByName('weapon')[0].value,
      cartoon: document.getElementsByName('cartoon')[0].value,
    };    
    
    const data = charactersAPI.createOneRegister(newChar);
  });
});
