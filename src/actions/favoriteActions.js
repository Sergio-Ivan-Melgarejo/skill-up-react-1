import {ADD_OR_REMOVE,GET_ALL,RESET} from "../types"

export const addFavoriteOrRemove = (data) => ({type:ADD_OR_REMOVE,payload:data})
export const getAll = () => ({type:GET_ALL})
export const reset = () => ({type:RESET})