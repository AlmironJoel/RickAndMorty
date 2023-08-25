import { Link } from "react-router-dom";

export default function Card(props) {

   const {character} = props
   const {onClose} = props
   return (
      <div>
          <button onClick={()=>onClose(character.id)}>X</button>
         
         <Link to={`/detail/${character.id}`}>
         <h2>Name:{character.name} </h2>
         </Link>

         <h2>Species:{character.species} </h2>
         <h2>Gender:{character.gender} </h2>
         <h2></h2>
         <h2></h2>
         <img src={character.image} alt='{character.name}' />
      </div>
   );
}
