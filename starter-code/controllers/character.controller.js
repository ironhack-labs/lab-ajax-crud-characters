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
      return {
        valid: false,
        errors,
      };
    }
    return {
      valid: true,
    };
  },
  manageResponse(res, promise){
    return promise
      .then(characters => {
        return characters ? 
          res.json(characters) : 
          res.status(404).json({
            status: 404,
            message: 'Not found'
          });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: err,
        });
      });
  },
  getAllCharacters(){
    return Character.find().select({updatedAt:0, createdAt:0, __v:0});
  },
  getCharacterById(id){
    return Character.findById(id).select({updatedAt:0, createdAt:0, __v:0});
  },
  createCharacter(post){
    const areValid = this.isValidPostForm(post);
    if(!areValid.valid){
      return Promise.reject(areValid.errors);
    }

    let {name, occupation, cartoon, weapon} = post;
    
    return Character.create({
      name, occupation, cartoon, weapon
    });
  },
  updateCharacter(id, post){
    const areValid = this.isValidPostForm(post);
    if(!areValid.valid){
      consol.log(areValid)
      return Promise.reject(areValid.errors);
    }

    let {name, occupation, cartoon, weapon} = post;

    return Character.findByIdAndUpdate(id, {
      name, occupation, cartoon, weapon
    }, {new: true});
  },
  deleteCharacter(id){
    return Character.findByIdAndDelete(id);
  }
};