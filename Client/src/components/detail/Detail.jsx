import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

const Detail = ()=>{
    const {id} =  useParams()
    const[character,setCharacter] =  useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            {/* renderizado condicional */}
            {/*opcion 1 de condicional */}
            <h2>{character&&character.name}</h2>
            <h2>{character&&character.status}</h2>

            {/*opcion 2 de condicional */}
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
            <button>
                <Link to='/home'>Cerrar Carta</Link>
            </button>
        </div>
    )
}

export default Detail