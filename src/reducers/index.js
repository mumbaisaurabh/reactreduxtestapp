import changeTheNumber from "./changeNumber";
import changeTheColor from "./changeColor";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeTheNumber: changeTheNumber,
    changeTheColor: changeTheColor
})

export default rootReducer;