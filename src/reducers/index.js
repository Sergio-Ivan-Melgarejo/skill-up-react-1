import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";

// Los Combina
const reducer = combineReducers({
    favorites:favoriteReducer
})

export default reducer