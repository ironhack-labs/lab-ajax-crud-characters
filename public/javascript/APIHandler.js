class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList() {
    axios
      .get(this.BASE_URL)
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log("Unable to access data from DB");
      });
  }
​  getOneRegister(chrId) {
    axios
      .get((this.BASE_URL += `/${chrId}`))
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(`Unable to retrieve character with id ${chrId}`);
      });
  }
  createOneRegister() {
    axios
      .post(this.BASE_URL, newCharacterInfo)
      .then((response) => {
        this.getFullList();
        document.getElementById("new-character-form").reset();
      })
      .catch((error) => console.log(`Error while saving a new character`));
  }
  updateOneRegister(charId, updatedCharacter) {
    axios
      .put((this.BASE_URL += `/${charId}`), updatedCharacter)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Unable to update character with id ${charId}`);
      });
  }
  deleteOneRegister(deleteId) {
    const toDelete = confirm("Are you sure you want to delete?");
    if (toDelete) {
      axios
        .delete((this.BASE_URL += `/${deleteId}`))
        .then((response) => {
          alert(response.data);
          getFullList();
        })
        .catch((error) =>
          console.log(`Error while deleting character: ${error}`)
        );
    }
  }
}
