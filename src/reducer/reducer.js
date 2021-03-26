const initState = {
    atmAmountValue:"",
    atmAmount:"",
    accountNumberValue:"",  
    passwordValue:"",
    

  };
  
export const atm =(state=initState , action) => {
     switch (action.type) {
      case "ADD_ATM_AMOUNT_VALUE":
        return {...state, atmAmountValue:action.payload };
      case "ADD_ATM_AMOUNT":
        return { ...state, atmAmount:action.payload,atmAmountValue:""};
      case "ADD_ACCOUNT_NUMBER_VALUE":
        return {...state, accountNumberValue:action.payload };
      // case "ADD_ACCOUNT_NUMBER":
      //   return {...state,Object.assign({},accountDetails,{accountNumber:action.payload})};
      case "ADD_PASSWORD_VALUE":
        return {...state, passwordValue:action.payload };
        case "CLEAR_VALUE":
        return {...state, passwordValue:"",accountNumberValue:"" };
      //  case "ADD_PASSWORD":
      //   return Object.assign({}, state.accountDetails, {password:action.payload});
      
      default:
        return state;
    }
  };
  