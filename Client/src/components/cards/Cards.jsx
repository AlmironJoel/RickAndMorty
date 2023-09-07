import Card from '../card/Card';

export default function Cards({characters,onClose}) {

   return(
       <div>
         {characters.map(character => (
            <Card key={character.id}
             id={character.id} 
             {...character}
              onClose={onClose} />
         ))}
      
   </div>)
}
