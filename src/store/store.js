import { createStore, combineReducers  } from "redux";
import { atm } from "../reducer/reducer";
import { accountDetails } from "../reducer/AccountDetailReducer";
import {customberDetails} from "../reducer/CustomberDetails"
import {notes} from "../reducer/Notes"



    

const allReducer=combineReducers({atm:atm,note:notes,account:accountDetails,customber:customberDetails})
export const store = createStore(allReducer);
