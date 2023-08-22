import Card from './Card';

export default function Cards(props) {
  console.log(props)
   const {characters} = props
   const {onClose} = props

   return(
       <div>
         {characters.map(character => (
            <Card key={character.id} character={character} onClose={onClose} />
         ))}
      
   </div>)
}
