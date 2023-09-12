
const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

const getCharById = (req,res) =>{
    const {id} =req.params;

    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender})=>{
        if(id && name){
            const character = {
              id,
              name,
              status,
              species,
              origin,
              image,
              gender,
              status  
            }
            return res.status(200).json(character)
        }
    })
}

module.exports = {
    getCharById
}