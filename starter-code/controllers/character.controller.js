const Character = require('../models/Character');

module.exports = {
  getAllCharacters(){
    return Character.find();
  },
  getCharacterById(id){
    return Character.findById(id);
  },
  createCharacter(post){
    let {name, occupation, cartoon, weapon} = post;
    cartoon = Boolean(cartoon);
    const error = {};
    
    if(typeof name !== 'string') error.name = 'The name is not valid or is empty';
    if(typeof occupation !== 'string') error.occupation = 'The occupation is not valid or is empty';
    if(typeof cartoon !== 'boolean') error.cartoon = 'The cartoon is not valid or is empty';
    if(typeof weapon !== 'string') error.weapon = 'The weapon is not valid or is empty';
    
    if(error.name || error.occupation || error.cartoon || error.weapon){
      let errors = [];
      for(let prop in error){
        if(error.hasOwnProperty(prop)){
          errors.push(error[prop])
        }
      }
      return Promise.reject(errors);
    }


    return Character.create({
      name, occupation, cartoon, weapon
    });
  }
};