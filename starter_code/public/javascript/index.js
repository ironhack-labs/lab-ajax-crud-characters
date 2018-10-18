const charactersAPI = new APIHandler("http://localhost:8000/characters/"),
      fetchAll      = document.getElementById('fetch-all'),
      fetch         = document.getElementById('fetch-one'),
      deleteOne     = document.getElementById('delete-one'),
      create        = document.getElementById('new-character-form'),
      edit          = document.getElementById('edit-character-form');

$(document).ready( () => {
  fetchAll.onclick = () => {
    charactersAPI.getFullList();
  }
  
  fetch.onsubmit = e => {
    e.preventDefault();
    const id = document.getElementsByName(`character-id`)[0].value;
    charactersAPI.readOneRegister(id);
  }
  
  deleteOne.onsubmit = e => {
    e.preventDefault();
    const id = document.getElementsByName(`character-id-delete`)[0].value;
    charactersAPI.deleteOneRegister(id);
  }

  create.onsubmit = e => {
    e.preventDefault();
    let inputs = document.querySelectorAll(`#new-character-form .field > input`),
        obj    = {};

    for (let i = 0; i < inputs.length; i++) {
      obj[inputs[i].name] = inputs[i].value;
    }

    obj.cartoon = inputs[3].checked;

    charactersAPI.createOneRegister(obj);
  }
  
  edit.onsubmit = e => {
    e.preventDefault();
    const id = document.getElementsByName(`id`)[0].value;
    let inputs = document.querySelectorAll(`#edit-character-form .field > input`),
        obj    = {};

    for (let i = 0; i < inputs.length; i++) {
      obj[inputs[i].name] = inputs[i].value;
    }

    obj.cartoon = inputs[3].checked;

    charactersAPI.updateOneRegister(id, obj);
  }
}); // jQuery ready

const charsContainer = document.getElementsByClassName(`characters-container`),
      cardsDiv       = document.getElementsByClassName(`character-info`),
      infoDivs       = document.querySelectorAll(`.character-info div`);

function showAll(data) {
  var spans    = [];
  createDivs(data,spans).then(fillAll(spans));
}

function createDivs(data, spans) {
  return new Promise( (res,rej) => {
    data.forEach(item => {
      var obj = item,
          {id, name, occupation, weapon, cartoon} = obj,
          newInfos = cardsDiv[0].cloneNode(true),
          idSpan   = document.createElement(`span`),
          nameSpan = document.createElement(`span`),
          occSpan  = document.createElement(`span`),
          weapSpan = document.createElement(`span`),
          toonSpan = document.createElement(`span`);  
  
      idSpan.innerText   = id;
      nameSpan.innerText = name;
      occSpan.innerText  = occupation;
      weapSpan.innerText = weapon;
      toonSpan.innerText = cartoon;
  
      spans.push(idSpan, nameSpan, occSpan, weapSpan, toonSpan);
      
      if (cardsDiv.length < data.length) {
        for (let i = 0; i < data.length; i++) {
          res(charsContainer[0].appendChild(newInfos));
        }
      }
    });
  });
}

function fillAll(spans) {
  for (let i = 0; i < infoDivs.length; i++) {
    infoDivs[i].appendChild(spans[i])
  }
}

function showOne(data) {
  var obj = data,
      {id, name, occupation, weapon, cartoon} = obj,
      spans    = [],
      idSpan   = document.createElement(`span`),
      nameSpan = document.createElement(`span`),
      occSpan  = document.createElement(`span`),
      weapSpan = document.createElement(`span`),
      toonSpan = document.createElement(`span`);  

  idSpan.innerText   = id;
  nameSpan.innerText = name;
  occSpan.innerText  = occupation;
  weapSpan.innerText = weapon;
  toonSpan.innerText = cartoon;

  spans.push(idSpan, nameSpan, occSpan, weapSpan, toonSpan);

  if (cardsDiv.length > 1) {
    for (let i = cardsDiv.length - 1; i >= 1; i--) {
      charsContainer[0].removeChild(charsContainer[0].firstElementChild);
    }
  }

  const newInfoDivs = document.querySelectorAll(`.character-info div`);

  if (newInfoDivs[0].firstElementChild !== null) {
    for (let i = 0; i < newInfoDivs.length; i++) {
      newInfoDivs[i].removeChild(newInfoDivs[i].childNodes[1]);
    }
  }

  for (let i = 0; i < infoDivs.length; i++) {
    newInfoDivs[i].appendChild(spans[i]);
  }
}

function changeBg(elem) {
  elem.style.backgroundColor = `green`;
}

function deleted() {
  const deleteBtn = document.getElementById(`delete-btn`);
  changeBg(deleteBtn);
}

function created() {
  const createBtn = document.getElementById(`create-btn`);
  changeBg(createBtn);
}

function updated() {
  const updateBtn = document.getElementById(`update-btn`);
  changeBg(updateBtn);
}