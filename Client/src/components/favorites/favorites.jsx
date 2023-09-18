import Card from "../card/Card"
import { connect , useDispatch} from "react-redux"
import { filterCards, orderCards } from '../../redux/action';
import React, { useEffect, useState } from 'react';


const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (element) => {
        dispatch(orderCards(element.target.value));
        setAux(!aux);
      };
    
      const handleFilter = (element) => {
        const filterValue = element.target.value === 'unknown' ? 'Unknown' : element.target.value;
        dispatch(filterCards(filterValue));
        setAux(!aux);
      }; 
    
      useEffect(() => {
      }, []);
    


    return (
        <div>
            <div>
      <h1>My Favorites</h1>
      <div >
        <label htmlFor="orderSelect">
        </label>
        <select id="orderSelect" onChange={handleOrder} >
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>

      <div >
        <label htmlFor="filterSelect" >
        </label>
        <select id="filterSelect" onChange={handleFilter} >
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      </div>
        
            {myFavorites?.map(fav => {
                return( 
                     <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}    
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}                        
                        />
                )})
            }
        </div>
      
    )
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}
export default connect (
    mapStateToProps,
    null
)(Favorites);