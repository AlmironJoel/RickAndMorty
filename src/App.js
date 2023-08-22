import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';



function App() {
   /* Las funciones nos van dentro del return, sino que se crean fuera y se hacen llamar*/
   function closeHandle (){
      window.alert('Emulamos que se cierra la card')
   }   
   function SearchHandle (){
      window.alert('El ID que buscamos')
   }   

   return (
      <div className='App'>
         <SearchBar onSearch={SearchHandle} />
         <Cards characters={characters} onClose= {closeHandle} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status} 
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
