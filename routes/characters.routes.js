const fakeApi = require("../services/api.services");
const fakeService = new fakeApi("http://localhost:8000");

//* VERB GET Gets all the Characters

router.get("/characters", (req, res) => {
  fakeService.getAllCharacters().then((response) => {
    res.json(response.data);
  });
});

//* VERB GET Gets Character info by Id

router.get("/characters/:characterId", (req, res) => {
  const { characterId } = req.params;

  fakeService.getOneCharacter(characterId).then((response) => {
    res.json(response.data);
  });
});

//*VERB POST Create Character

router.post("/characters", (req, res) => {
  const { name, occupation, cartoon, weapon } = req.body;

  if (name !== "" || occupation !== "" || cartoon !== "" || weapon !== "") {
    return console.log({ name, occupation, cartoon, weapon });
  }

  fakeService
    .createCharacter({ name, occupation, cartoon, weapon })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.log(error));
});

//*VERB PUT Edit/Update Character

router.post("/characters/:id", (req, res) => {
  const characterId = req.params.id;
  const { name, occupation, cartoon, weapon } = req.body;

  fakeService
    .editCharacter(characterId, { name, occupation, cartoon, weapon })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.log(error));
});

//*VERB DELETE Deletes a Character by Id

router.get("/characters/:characterId", (req, res) => {
  const { characterId } = req.params;

  fakeService
    .deleteCharacter(characterId)
    .then(() => res.send("Character Deleted"))
    .catch((error) => console.log(error));
});

module.exports = router;
