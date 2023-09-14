
const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

const getCharById = async(req,res) =>{
    try {
        const {id} =req.params;
        const {data} = await axios.get(`${URL}/${id}`)
        const character = {
            id:data.id,
            name:data.name,
            status:data.status,
            species:data.species,
            origin:data.origin, 
            image:data.image,
            gender:data.gender,
          }
          return character.name ? res.json(character): res.status(404).send("Not found")
        
    } catch (error) {
        res.status(500).send(error.message)
    }

}   

module.exports = {
    getCharById
}