import React from 'react'
import { connect } from "react-redux";
import { withRouter,useHistory } from 'react-router-dom';
import {addAccountNumberValue,clearAccount,addCustomer,clearValue,addPasswordValue,addAccountNumber,addPassword} from "../action/action";
import axios from 'axios';
import Modal from 'react-modal';

const LoginInput = ({addAccountNumberValue,addCustomer,clearAccount,clearValue,atm,account,addAccountNumber,addPasswordValue,addPassword}) => {
  const [accountDetails,setAccountDetails]=React.useState([]);
  const [view,setView]=React.useState(false);
  let history=useHistory();
  const sumbmitHandler= (e)=>{ 
    e.preventDefault(); 
    if(atm.passwordValue===""||atm.accountNumberValue==="")      
    setView(true)
    else{
        
        addPassword(atm.passwordValue)
        addAccountNumber(atm.accountNumberValue)
        clearValue();
    }
 
    }
    
    const check=()=>{

      if(accountDetails.isPresent===true){
      addCustomer(accountDetails.accountDetails);
      setAccountDetails({})
      clearAccount()
      setView(false)
      history.push('/AtmOperation');
      }
      else{
        if(accountDetails.isPresent===false && view!=true)
        {
          clearAccount()
          setView(true)
          setAccountDetails([])
        }
      }
    }
    check();
    
    React.useEffect(async ()=>{ 
        const json =JSON.stringify({account})
        if(account.accountNumber!==0&& account.password!==0){
          const response=await axios.post ('http://localhost:8080/AutomatedTellerMachine/login',json)
          .then((response)=> axios.get ('http://localhost:8080/AutomatedTellerMachine/login')
          .then(r=>{setAccountDetails(r.data);})).catch(err => {console.error(err)})
        }  
    },[account.accountNumber]);

    return (
        <div >
            <form onSubmit={sumbmitHandler}>
            <input
            className="InputValue"
              type="number"
              name="amount"
              value={atm.accountNumberValue}
              placeholder="Account Number"
              onChange={e =>{addAccountNumberValue(e.target.value);}}
            /><br/><br/>
            <input
            className="InputValue"
              type="password"
              name="amount"
              value={atm.passwordValue}
              placeholder="Password"
              onChange={e =>{ addPasswordValue(e.target.value)}}
            /><br/><br/>
            <button className="btn" type="submit" value="startUpOption">SUBMIT</button>
            </form>
           {view && <h1 className="InValid">In Valid Input</h1> }
        </div>
    )
}
const mapDispatchToProps =  dispatch => ({
    addAccountNumberValue: value =>{dispatch(addAccountNumberValue(value))},
    addPasswordValue: (value) => dispatch(addPasswordValue(value)),
    addAccountNumber: (value) =>dispatch(addAccountNumber(value)),
    addPassword: (value) => dispatch(addPassword(value)),
    clearValue:()=>dispatch(clearValue()),
    clearAccount:()=>dispatch(clearAccount()),
    addCustomer:(object)=>dispatch(addCustomer(object))
  });
  const mapStateToProps = (state) => ({
    atm:state.atm,
    account:state.account});
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginInput);