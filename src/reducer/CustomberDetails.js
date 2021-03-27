const initAccount = {          
    accountBalance:'',      
    accountHolder:"",
    accountNumber:'',
    pinNumber:''    
};

export const customberDetails = (state = initAccount, action) => {
switch (action.type) {
 
  case "ADD_CUSTOMBER":
    console.log(state)
    return {state:action.payload};
  case "REMOVE_CUSTOMBER":
    return {state:initAccount};  

    default:
    return state;
}
};
