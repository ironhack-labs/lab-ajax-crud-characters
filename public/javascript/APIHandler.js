class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + "/characters")
      .then(reponseFromApi => {

        let charactersContainer = document.querySelector(".characters-container");
        charactersContainer.innerHTML = "";

        reponseFromApi.data.forEach(ele => {
          const {id, name, occupation, cartoon, weapon} = ele;
          charactersContainer.innerHTML += `<div class="character-info">
                                              <div class="id">Id: ${id}</div>
                                              <div class="name">Name: ${name}</div>
                                              <div class="occupation">Occupation: ${occupation}</div>
                                              <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
                                              <div class="weapon">Weapon: ${weapon}</div>
                                            </div>`;
        });
        // console.log(reponseFromApi.data);
      })
      .catch(error => console.log(error));
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL + "/characters/" + id)
      .then(reponseFromApi => {

        // console.log(reponseFromApi.data.name);

        const {id, name, occupation, cartoon, weapon} = reponseFromApi.data;

        let charactersContainer = document.querySelector('.characters-container');
        charactersContainer.innerHTML = "";

        charactersContainer.innerHTML = `<div class="character-info">
                                          <div class="id">Id: ${id}</div>
                                          <div class="name">Name: ${name}</div>
                                          <div class="occupation">Occupation: ${occupation}</div>
                                          <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
                                          <div class="weapon">Weapon: ${weapon}</div>
                                        </div>`;
                                
        console.log(charactersContainer);
      })
      .catch(error => console.log(error));

  }

  createOneRegister (newCharacter) {
    axios
      .post(this.BASE_URL + "/characters/", newCharacter)
      .then(() => this.getFullList())
      .catch(error => console.log(error));
  }

  updateOneRegister (id, updatedCharacter) {
    axios
      .put(this.BASE_URL + "/characters/" + id, updatedCharacter)
      .then(() => {
        this.getOneRegister(id);
      })
      .catch(error => console.log(error));
  }

  deleteOneRegister (id) {
    axios
      .delete(this.BASE_URL + "/characters/" + id)
      .then(() => {
        alert("character was deleted");
        this.getFullList();
      })
      .catch(error => console.log(error));
  }

}
