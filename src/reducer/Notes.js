const initAccount = {          
    fiveHundredRupees:"",
    hundredRupees:"",
    thousandRupees:""
} 
export const notes = (state = initAccount, action) => {
switch (action.type) {
  case "ADD_NOTES":
    return {state:action.payload};
  case "REMOVE_NOTES":
    return {state:initAccount};
  default:
    return state;
}
};
