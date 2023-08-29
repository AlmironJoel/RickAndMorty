import {ADD_FAV,REMOVE_FAV} from './action-types'

const initialState = {
    myfavorites:[]
}

const reducer = (state= initialState,{type,payload}) =>{
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                myfavorites:[...state.myfavorites,payload]
            }

        case REMOVE_FAV:
            return{
                ...state,
                myfavorites:state.myfavorites.filter(fav => fav.id !== payload)
            }


        default:
            return {...state}
    }

}

export default reducer