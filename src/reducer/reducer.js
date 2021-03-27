const initState = {
    atmAmountValue:"",
    atmAmount:"",
    accountNumberValue:"",  
    passwordValue:"",
    withDrawAmount:""
  };
  
export const atm =(state=initState , action) => {
     switch (action.type) {
      case "ADD_ATM_AMOUNT_VALUE":
        return {...state, atmAmountValue:action.payload };
      case "ADD_ATM_AMOUNT":
        return { ...state, atmAmount:action.payload,atmAmountValue:""};
      case "ADD_WITHDRAW_AMOUNT":
        return { ...state, withDrawAmount:action.payload,atmAmountValue:""};  
      case "ADD_ACCOUNT_NUMBER_VALUE":
        return {...state, accountNumberValue:action.payload };
      case "ADD_PASSWORD_VALUE":
        return {...state, passwordValue:action.payload };
      case "CLEAR_VALUE":
        return {...state, passwordValue:"",atmAmountValue:'',accountNumberValue:""};
      
      default:
        return state;
    }
  };
  