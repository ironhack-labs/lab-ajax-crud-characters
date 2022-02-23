const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  function newContainer(container){
    const { id, name , occupation , cartoon , weapon } = container;
    return `<div class="characters-container">
    <div class="character-info">
      <div class="id">Id: <span>${id}</span></div>
      <div class="name">Name: <span>${name}</span></div>
      <div class="occupation">Occupation: <span>${occupation}</span></div>
      <div class="cartoon">Is a Cartoon? <span>${cartoon}</span></div>
      <div class="weapon">Weapon: <span>${weapon}</span></div>
    </div>
  </div>`;
  }

  document.getElementById('fetch-all').addEventListener('click', async function (event) { 
    const buttonStyle = event.target.style;
    const resFromApi = await charactersAPI.getFullList();
    if('status' in resFromApi){
      const section = document.getElementById('fetch-data');
      section.innerHTML = "";
      [...resFromApi.data].forEach(element => {
        const html = newContainer(element);
        section.innerHTML += html;
      });
      buttonStyle.backgroundColor = "green";
    } else {
      buttonStyle.backgroundColor = "red";
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const buttonStyle = event.target.style;
    const fetchOneId = document.getElementsByName('character-id')[0].value;
    const section = document.getElementById('fetch-data');
    if(fetchOneId!==""){
      const resFromApi = await charactersAPI.getOneRegister(fetchOneId);
      if('status' in resFromApi){
        const html = newContainer(resFromApi.data);
        section.innerHTML = html;
        buttonStyle.backgroundColor = "green";
      } else {
        buttonStyle.backgroundColor = "red";
      }
    } else {
      section.innerHTML="";
      buttonStyle.backgroundColor = "red";
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const buttonStyle = event.target.style;
    const deleteOneId = document.getElementsByName('character-id-delete')[0].value;
    if(deleteOneId!==""){
      const resFromApi = await charactersAPI.deleteOneRegister(deleteOneId);
      if('status' in resFromApi){  
        buttonStyle.backgroundColor = "green";
      } else {
        buttonStyle.backgroundColor = "red";
      }
    } else {
      buttonStyle.backgroundColor = "red";
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const editForm = event.target;
    const buttonStyle = editForm.getElementsByTagName('button')[0].style;
    const [
      { value: id },
      { value: name },
      { value: occupation },
      { value: weapon },
      { checked: cartoon }
    ] = editForm.getElementsByTagName('input');
    const resFromApi = await charactersAPI.updateOneRegister(id, {
      name,
      occupation,
      cartoon,
      weapon
    });
    if('status' in resFromApi){  
      buttonStyle.backgroundColor = "green";
    } else {
      buttonStyle.backgroundColor = "red";
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const newForm = event.target;
    const buttonStyle = newForm.getElementsByTagName('button')[0].style;
    const [
      { value: name },
      { value: occupation },
      { value: weapon },
      { checked: cartoon }
    ] = newForm.getElementsByTagName('input');
    resFromApi = await charactersAPI.createOneRegister({
      name,
      occupation,
      cartoon,
      weapon
    });
    if('status' in resFromApi){  
      buttonStyle.backgroundColor = "green";
    } else {
      buttonStyle.backgroundColor = "red";
    }
  });
});