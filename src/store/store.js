import { createStore, combineReducers  } from "redux";
import { atm } from "../reducer/reducer";
import { accountDetails } from "../reducer/AccountDetailReducer";



    

const allReducer=combineReducers({atm:atm,account:accountDetails})
export const store = createStore(allReducer);
