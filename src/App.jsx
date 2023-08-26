import { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { Routes,Route,useNavigate,useLocation } from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';

import './App.css';


const email = "pepito@hotmail.com"
const password = 'asd12345'

function App() {
   /* Las funciones nos van dentro del return, sino que se crean fuera y se hacen llamar*/
   function closeHandle (){//*Emulamos que se cierra la card
      window.alert('Emulamos que se cierra la card')
   }
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
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
    
   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {location.pathname !== '/'?<Nav onSearch={onSearch}/>: null}
      <Routes>      
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose= {onClose} />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </div>
   );
}

export default App;
