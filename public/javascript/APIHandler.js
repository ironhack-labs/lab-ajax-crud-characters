/* const axiosAPI = axios.create({
  baseUrl: 'http://localhost:8000'
}) */
const charContainer = document.getElementsByClassName(
  "characters-container"
)[0];
const charInfo = document.getElementsByClassName("character-info")[0];
const deleteBtn = document.getElementById('delete-one')
const createBtn = document.getElementById('send-data')

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0].name);
        charInfo.classList.add("hidden");
        for (let i = 0; i < response.data.length; i++) {
          console.log(i);
          dataOnPage(response.data[i]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then((response) => {
        console.log(id);
        console.log(response.data);
        charInfo.classList.add("hidden");
        dataOnPage(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    axios
      .post(this.BASE_URL + "/characters", {
        name,
        occupation,
        weapon,
        cartoon,
      })
      .then((data) => {
        console.log(data);
        createBtn.classList.add('active')
      })
      .catch(err => {
        console.log(err)
        createBtn.classList.add('red')
      })
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    axios
      .put(this.BASE_URL + `/characters/${id}`, {
        name,
        occupation,
        weapon,
        cartoon,
      })
      .then((data) => {
        console.log(data.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + `/characters/${id}`)
      .then((data) => {
        deleteBtn.classList.add('active')
        console.log(data.data);
      })
      .catch((err) => {
        deleteBtn.classList.add('red')
        console.log(err);
      });
  }
}

function dataOnPage(resVar) {
  // console.log(i)

  const charDescription = document.createElement("ul");
  const charIdDesc = document.createElement("li");
  charIdDesc.innerHTML = "Id: ";
  const charNameDescr = document.createElement("li");
  charNameDescr.innerHTML = "Character Name: ";
  const charOccupationDescr = document.createElement("li");
  charOccupationDescr.innerHTML = "Character Occupation: ";
  const charISCartoonDescr = document.createElement("li");
  charISCartoonDescr.innerHTML = "Is a Cartoon?: ";
  const charWeaponDescr = document.createElement("li");
  charWeaponDescr.innerHTML = "Character Weapon: ";
  charContainer.appendChild(charDescription);
  charDescription.append(
    charIdDesc,
    charNameDescr,
    charOccupationDescr,
    charISCartoonDescr,
    charWeaponDescr
  );

  const charCharacter = document.createElement("ul");
  const charId = document.createElement("li");
  charId.innerHTML = `${resVar.id}`;
  const charName = document.createElement("li");
  charName.innerHTML = `${resVar.name}`;
  const charOccupation = document.createElement("li");
  charOccupation.innerHTML = `${resVar.occupation}`;
  const charISCartoon = document.createElement("li");
  charISCartoon.innerHTML = `${resVar.cartoon}`;
  const charWeapon = document.createElement("li");
  charWeapon.innerHTML = `${resVar.weapon}`;
  charContainer.appendChild(charDescription);
  charContainer.appendChild(charCharacter);
  charCharacter.append(
    charId,
    charName,
    charOccupation,
    charISCartoon,
    charWeapon
  );
}

/* function dataOnPage(response) {
  for (let i = 0; i <= response.data.length; i++) {
    // console.log(i)
     

 
  const charDescription = document.createElement("ul")
              const charIdDesc = document.createElement('li')
              charIdDesc.innerHTML = "Id: "
              const charNameDescr = document.createElement("li")
              charNameDescr.innerHTML = "Character Name: "
              const charOccupationDescr = document.createElement("li")
              charOccupationDescr.innerHTML = "Character Occupation: "
              const charISCartoonDescr = document.createElement("li")
              charISCartoonDescr.innerHTML = "Is a Cartoon?: "
              const charWeaponDescr = document.createElement("li")
              charWeaponDescr.innerHTML = "Character Weapon: "
              charContainer.appendChild(charDescription)
              charDescription.append(charIdDesc, charNameDescr, charOccupationDescr, charISCartoonDescr, charWeaponDescr)

              const charCharacter = document.createElement("ul")
              const charId = document.createElement('li')
              charId.innerHTML = `${response.data[i].id}`
              const charName = document.createElement("li")
              charName.innerHTML = `${response.data[i].name}`
              const charOccupation = document.createElement("li")
              charOccupation.innerHTML = `${response.data[i].occupation}`
              const charISCartoon = document.createElement("li")
              charISCartoon.innerHTML = `${response.data[i].cartoon}`
              const charWeapon = document.createElement("li")
              charWeapon.innerHTML = `${response.data[i].weapon}`
              charContainer.appendChild(charDescription) 
              charContainer.appendChild(charCharacter)
              charCharacter.append(charId, charName, charOccupation, charISCartoon, charWeapon)
            }  
} */
