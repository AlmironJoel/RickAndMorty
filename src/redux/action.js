import {ADD_FAV,REMOVE_FAV} from './action-types'

export const addFav = (characte)=> {
    return{type:ADD_FAV,payload:characte}
}

export const removeFav = (id) =>{
    return{ type:REMOVE_FAV,payload:id}
}
