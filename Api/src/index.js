const http = require ("http");
const {getCharById} = require('./controllers/getCharById')

const PORT = 3001;

http
.createServer ((req,res) =>{
    const{url} =req;
    res.setHeader('Access-Control-Allow-Origin','*');
    if (url.includes("/rickandmorty/character")){
        const id = req.url.split('/').at(-1);
        getCharById(res,+id)
    }


})
.listen(PORT);




















// if (url.includes("/rickandmorty/character")){
//     let urlId = url.split("/").pop();
//     let found = characters.find(    
//         (character) => character.id === Number(urlId)
//     );

//     res
//         .writeHead(200,{"content-type": "aplication/json"})
//         .end(JSON.stringify(found))
// }