import { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import { Routes,Route,useNavigate,useLocation } from 'react-router-dom';
import Favorites from './components/favorites/favorites.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';

import './App.scss';


const email = "pepito@hotmail.com"
const password = '123456a'

function App() {
   const location = useLocation()
   const navegate = useNavigate()
   const [characters,setCharacters] = useState([])
   const[access,setAccess]=useState(false) 

   const login=(userData)=>{
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navegate('/home');//si todo da true me redirige a home
      }
   }

   useEffect(()=>{
      !access&&navegate('/')
   },[access])

   const onSearch = (id)=> {
      if(!characters.some(character=> character.id === Number(id))){
         axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      }else{
         alert ('Este personaje ya a sido agregado')
         return;
      }
      
   }
    
   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   function randomHandle () {
      let randomId = (Math.random() * 826).toFixed();
      randomId = parseInt(randomId)
      if(!characters.includes(randomId)){
         onSearch(randomId)
      }else{
         alert ('Este personaje ya a sido agregado')
         return;
      }
   }

   return (
      <div className='App'>
         {location.pathname !== '/'?<Nav 
         onSearch={onSearch}
         randomize={randomHandle}
         />: null}
      <Routes>      
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose= {onClose} />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element= {<Favorites/>}/>
      </Routes>
      </div>
   );
}

export default App;
// //  /* Las funciones nos van dentro del return, sino que se crean fuera y se hacen llamar*/
// function closeHandle (){//*Emulamos que se cierra la card
//    window.alert('Emulamos que se cierra la card')
// }