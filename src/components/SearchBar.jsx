export default function SearchBar(props) {

   const {SearchHandle}=props
   return (
      <div>
         <input type='search' />
         <button onClick={SearchHandle}>Agregar</button>
      </div>
   );
}
