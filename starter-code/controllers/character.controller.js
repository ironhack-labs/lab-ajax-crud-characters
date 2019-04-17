const Character = require('../models/Character');

module.exports = {
  getAllCharacters(){
    return Character.find();
  },
  getCharacterById(id){
    return Character.findById(id);
  }
};