// combina todos os reducers
import { combineReducers } from "redux";

import bagReducer from "./Bag/reducer";

const rootReducer = combineReducers({ bagReducer })

export default rootReducer;