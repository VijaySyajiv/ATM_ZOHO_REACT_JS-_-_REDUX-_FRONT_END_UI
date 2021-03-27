const initAccount = {          
          accountNumber:0,      
          password:0      
    };
    
  export const accountDetails = (state = initAccount, action) => {
      switch (action.type) {
       
        case "ADD_ACCOUNT_NUMBER":
          return {...state,accountNumber:action.payload};

        case "ADD_PASSWORD":
          return {...state,password:action.payload};
        case "REMOVE_ACCOUNT":
          return {state:initAccount};
        default:
          return state;
      }
    };
    