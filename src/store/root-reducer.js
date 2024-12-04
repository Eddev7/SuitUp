// combina todos os reducers
import { combineReducers } from "redux";

import bagReducer from "./Bag/reducer";
import userReducer from "./User/reducer";

const rootReducer = combineReducers({ bagReducer, userReducer })

export default rootReducer;