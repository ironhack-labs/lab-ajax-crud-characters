class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(response => {
      console.log(response.data);
      document.getElementById('characters-container').innerHTML = '';
      createCard(response.data);
      // response.data.forEach(element => {
      //   createCard(element);
      // })
    })
    .catch(err => {
      console.log(err);
    });
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response);
      document.getElementById('characters-container').innerHTML = '';
      createCard(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  createOneRegister (name, occupation, weapon, isCartoon) {
    axios.post(`${this.BASE_URL}/characters`, {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": isCartoon
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  updateOneRegister (id, name, occupation, weapon, isCartoon) {
    axios.put(`${this.BASE_URL}/characters/${id}`, {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": isCartoon
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }
}

function createCard(data) {

  const divContainer = document.getElementById('characters-container');
  let innerHtml = '';

  console.log(innerHtml);

  data.forEach(element => {
    const { name, occupation, weapon, cartoon } = element;
    innerHtml += `<div class="character-info">
  <div class="name">Character Name<span>${name}</span></div>
  <div class="occupation">Character Occupation<span>${occupation}</span></div>
  <div class="cartoon">Is a Cartoon?<span>${weapon}</span></div>
  <div class="weapon">Character Weapon<span>${cartoon}</span></div>
</div>`;
  });

  console.log(innerHtml);

  divContainer.innerHTML = innerHtml;
  // const divInfo = document.createElement('div');
  // divInfo.classList.add('character-info');

  // const divName = createElement({ htmlElement: 'div', className: 'name', label: 'Name:' });
  // // const divName = document.createElement('div');
  // // divName.classList.add('name');
  // // divName.innerText = 'Name:';

  // const spanName = document.createElement('span');
  // spanName.innerText = data.name;
  // divName.appendChild(spanName);

  // const divOccupation = createElement({ htmlElement: 'div', className: 'occupation', label: 'Occupation:' });
  // // const divOccupation = document.createElement('div');
  // // divOccupation.classList.add('occupation');
  // // divOccupation.innerText = 'Occupation:';

  // const spanOccupation = document.createElement('span');
  // spanOccupation.innerText = data.occupation;
  // divOccupation.appendChild(spanOccupation);

  // const divCartoon = createElement({ htmlElement: 'div', className: 'cartoon', label: 'Cartoon:' });
  // // const divCartoon = document.createElement('div');
  // // divCartoon.classList.add('cartoon');
  // // divCartoon.innerText = 'Cartoon:';

  // const spanCartoon = document.createElement('span');
  // spanCartoon.innerText = data.cartoon;
  // divCartoon.appendChild(spanCartoon);

  // const divWeapon = createElement({ htmlElement: 'div', className: 'weapon', label: 'Weapon:' });
  // // const divWeapon = document.createElement('div');
  // // divWeapon.classList.add('weapon');
  // // divWeapon.innerText = 'Weapon:';

  // const spanWeapon = document.createElement('span');
  // spanWeapon.innerText = data.weapon;
  // divWeapon.appendChild(spanWeapon);

  // divInfo.appendChild(divName);
  // divInfo.appendChild(divOccupation);
  // divInfo.appendChild(divCartoon);
  // divInfo.appendChild(divWeapon);



  // divContainer.appendChild(divInfo);
}

// createElement({htmlElement: 'div', className: 'class', label: 'label' })

function createElement(attributes) {

  const { htmlElement, className, label} = attributes;
  const div = document.createElement(htmlElement);
  div.classList.add(className);
  div.innerText = label;

  return div;
}