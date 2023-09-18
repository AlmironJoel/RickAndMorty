import {ADD_FAV,REMOVE_FAV,ORDER,FILTER} from './action-types'

const initialState = {
    myFavorites:[],
    allCharacters: []
}

const reducer = (state= initialState,{type,payload}) =>{
    switch(type){
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };

        case REMOVE_FAV:
            // const idToRemove = parseInt(payload);
            return{
                ...state,
                myFavorites:payload,
                allCharacters: payload 
            }
            case 'FILTER':
                const gender = payload;
                if (gender === 'all') {
                  return {
                    ...state,
                    myFavorites: [...state.allCharacters],
                  };
                } else {
                  return {
                    ...state,
                    myFavorites: state.allCharacters.filter(
                      (character) => character.gender === gender
                    ),
                  };
                }
               case 'ORDER':
                const order = payload;
                let sortedCharacters = [...state.myFavorites];
                if (order === 'A') {
                  sortedCharacters.sort((a, b) => a.id - b.id);
                } else if (order === 'D') {
                  sortedCharacters.sort((a, b) => b.id - a.id);
                }
                return {
                  ...state,
                  myFavorites: sortedCharacters,
                };


        default:
            return {...state}
    }



}

export default reducer