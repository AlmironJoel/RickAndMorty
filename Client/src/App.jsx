import { useState,useEffect } from 'react';
import axios from 'axios';
import { Routes,Route,useNavigate,useLocation } from 'react-router-dom';

//Rutas
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import Favorites from './components/favorites/favorites.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import Error404 from './components/error/Error404.jsx';

//Estilos
import style from './App.module.css'


const email = "pepito@hotmail.com"
const password = '123456a'


function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [characters,setCharacters] = useState([])
   const[access,setAccess]=useState(false) 

  const login = async(userData) => {
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)

      const { access } = data;
      setAccess(access);
       access && navigate('/home');
   } catch (error) { alert('pepito@hotmail.com  123456a') }
}

   useEffect(()=>{
      !access&&navigate('/')
   },[access])

   function logout() {
      setAccess(false);
      setCharacters([]); 
      dispatch(clearFavorites()); 
      navigate("/");
    }


   const onSearch = async (id)=> {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
       console.log(error)  
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

   return  (
      <div className={style.videoBackground}>
      
      <div className={style.App}>
         {location.pathname !== '/'?<Nav
         onSearch={onSearch}
         logout={logout}
         randomize={randomHandle}
         />: null}
      <Routes>      
           
            <Route path='/' element={<Form login={login}/>} /> 
            <Route path='/home' element={<Cards characters={characters} onClose= {onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element= {<Favorites/>}/>
            <Route path="*" element={<Error404 />} />
      </Routes>
      </div>
      </div>  
   );
}

export default App;
// //  /* Las funciones nos van dentro del return, sino que se crean fuera y se hacen llamar*/
// function closeHandle (){//*Emulamos que se cierra la card
//    window.alert('Emulamos que se cierra la card')
// }