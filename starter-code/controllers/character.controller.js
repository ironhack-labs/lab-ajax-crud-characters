const Character = require('../models/Character');

module.exports = {
  isValidPostForm(post){
    let {name, occupation, cartoon, weapon} = post;
    cartoon = Boolean(cartoon);
    
    const error = {};
    
    if(typeof name !== 'string' || name === "") error.name = 'The name is not valid or is empty';
    if(typeof occupation !== 'string' || occupation === "") error.occupation = 'The occupation is not valid or is empty';
    if(typeof cartoon !== 'boolean') error.cartoon = 'The cartoon is not valid';
    if(typeof weapon !== 'string' || weapon === "") error.weapon = 'The weapon is not valid or is empty';
    
    if(error.name || error.occupation || error.cartoon || error.weapon){
      let errors = [];
      for(let prop in error){
        if(error.hasOwnProperty(prop)){
          errors.push(error[prop])
        }
      }
      return errors;
    }
    return;
  },
  getAllCharacters(){
    return Character.find();
  },
  getCharacterById(id){
    return Character.findById(id);
  },
  createCharacter(post){
    const errors = this.isValidPostForm(post);
    if(errors){
      return Promise.reject(errors);
    }

    let {name, occupation, cartoon, weapon} = post;
    
    return Character.create({
      name, occupation, cartoon, weapon
    });
  },
  updateCharacter(id, post){
    const errors = this.isValidPostForm(post);
    if(errors){
      return Promise.reject(errors);
    }

    let {name, occupation, cartoon, weapon} = post;

    return Character.findByIdAndUpdate(id, {
      name, occupation, cartoon, weapon
    });
  },
  deleteCharacter(id){
    return Character.findByIdAndDelete(id);
  }
};