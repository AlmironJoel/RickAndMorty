// import characters from './dataELIMINADO.js'; //!Eliminado
// import SearchBar from './components/SearchBar.jsx'; //!eliminado
import Card from './components/Card.jsx';
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

import './App.css';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};




function App() {
   
   /* Las funciones nos van dentro del return, sino que se crean fuera y se hacen llamar*/
   function closeHandle (){//*Emulamos que se cierra la card
      window.alert('Emulamos que se cierra la card')
   }   
   function SearchHandle (id){//*EL id que buscamos 
      setCharacters([...characters,example])
   }
   
   function onSearch (characters) {
      
   }

   const [characters,setCharacters] = useState([])

   return (
      <div className='App'>
        {/* <SearchBar onSearch={SearchHandle} /> */} {/*ELIMINADO*/}
         <Cards characters={characters} onClose= {closeHandle} />
        <Nav onSearch={SearchHandle} />
      </div>
   );
}

export default App;
