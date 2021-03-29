export const addAtmAmountValue = value => ({
    type: "ADD_ATM_AMOUNT_VALUE",
    payload: value
  });
export const addAccountNumberValue = value => ({
    type: "ADD_ACCOUNT_NUMBER_VALUE",
    payload: value
  });
  export const addPasswordValue = value => ({
    type: "ADD_PASSWORD_VALUE",
    payload: value
  });
  export const addAccountNumber = value => ({
    type: "ADD_ACCOUNT_NUMBER",
    payload: value
  });
  export const addPassword = value => ({
    type: "ADD_PASSWORD",
    payload: value
  });

export const addAtmAmount = value => ({
    type: "ADD_ATM_AMOUNT",
    payload: value
  });
  export const clearValue =()  => ({
    type: "CLEAR_VALUE"
  });
  export const addCustomer =(object)  => ({
    type: "ADD_CUSTOMBER",
    payload:object
  });
  export const clearCustomber =()  => ({
    type: "REMOVE_CUSTOMBER"
  });
  export const clearAccount =()  => ({
    type: "REMOVE_ACCOUNT"
  });
  export const addWithDrawAmount =(value)  => ({
    type: "ADD_WITHDRAW_AMOUNT",
    payload:value
  });
  
  export const removeNote =()=> ({
    type: "REMOVE_NOTES"
  });
  export const addNote =(object)  => ({
    type: "ADD_NOTES",
    payload:object
  });
  export const removeWithdrawAmount =()=> ({
    type: "REMOVE_WITHDRAW_AMOUNT"
  });