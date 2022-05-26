import {ADD_OR_REMOVE,GET_ALL,RESET} from "../types"

const initialState = [];

export default function favoriteReducer(state = initialState,action){
    switch(action.type){
        case ADD_OR_REMOVE:
            // validation if the data has already been saved

            let TheMovieHasAlreadyBeenSaved = undefined
            if(state.length !== 0){
                TheMovieHasAlreadyBeenSaved = state.find(movie => movie.id === action.payload.id);
            }
           
            if(TheMovieHasAlreadyBeenSaved === undefined){
                // add movie
                let data = [...state, action.payload];
                localStorage.setItem("favs",JSON.stringify(data));
                return data;
            }
            else{
                // remove movie
                let data = state.filter(movie => movie.id !== action.payload.id);
                localStorage.setItem("favs",JSON.stringify(data));
                return data;
            }
        case GET_ALL:{
            let data = localStorage.getItem("favs");
            if(data === null){
                return initialState;
            } else{
                return JSON.parse(data);
            } 
        }
        case RESET:
            localStorage.removeItem("favs");
            return initialState;
        default: return state;
    }
}