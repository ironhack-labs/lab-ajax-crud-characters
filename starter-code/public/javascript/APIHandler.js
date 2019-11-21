

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = (req, res) => {
    Character.find()
      .then(characters => res.json({
        characters
      }))
      .catch(err => console.error(err));
  };

  getOneRegister = (req, res) => {
    const {
      characterId
    } = req.params;
    Character.findById(characterId).then(character =>
      res.status(200).json(character)
    );

  };

  createOneRegister = (req, res) => {
    const {
      name,
      occupation,
      cartoon,
      weapon,
    } = req.body;

    Character.create({
        name,
        occupation,
        cartoon,
        weapon
      })
      .then(() => res.status(201).json({
        message: "Character created"
      }))
      .catch(err => console.error(err));

  };

  updateOneRegister = (req, res) => {

    const {
      characterId
    } = req.params;
    const {
      name,
      occupation,
      cartoon,
      weapon
    } = req.body;
    console.log(name, occupation, cartoon, weapon);
    //Character.findOneAndUpdate({_id: id}) ===
    Character.findByIdAndUpdate(characterId, {
        name,
        occupation,
        cartoon,
        weapon
      })
      .then(() => res.status(200).json({
        message: "Yastubo"
      }))
      .catch(err => console.error(err));
  }

  deleteOneRegister = (req, res) => {
    const {
      characterId
    } = req.params;
    Character.findByIdAndDelete(characterId)
      .then(() => res.status(200).json({
        message: "Objetivo eliminado"
      }))
      .catch(err => console.error(err));

  }
}