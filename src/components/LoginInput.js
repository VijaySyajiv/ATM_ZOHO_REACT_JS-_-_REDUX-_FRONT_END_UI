import React from 'react'
import { connect } from "react-redux";
import { withRouter,useHistory } from 'react-router-dom';
import {addAccountNumberValue,clearValue,addPasswordValue,addAccountNumber,addPassword} from "../action/action";
import axios from 'axios';

const LoginInput = ({addAccountNumberValue,clearValue,atm,account,addAccountNumber,addPasswordValue,addPassword}) => {
  const [accountDetails,setAccountDetails]=React.useState([]);
  let history=useHistory();
  const sumbmitHandler= (e)=>{        
        e.preventDefault(); 
        addPassword(atm.passwordValue)
        addAccountNumber(atm.accountNumberValue)
        clearValue();
        // history.push('/Loading');
 
    }
    
    const check=()=>{
      if(accountDetails.isPresent===true){
      console.log(accountDetails.accountDetails);
      setAccountDetails([])
      }
      else{
        // setAccountDetails([])
      }
    }
    check();
    // console.log(accountDetails);
    React.useEffect(async ()=>{ 
        const json =JSON.stringify({account})
        if(account.accountNumber!==0&& account.password!==0){
          const response=await axios.post ('http://localhost:8080/AutomatedTellerMachine/login',json)
          .then((response)=> axios.get ('http://localhost:8080/AutomatedTellerMachine/login')
          .then(r=>{setAccountDetails(r.data);})).catch(err => {console.error(err)})
        }  
    },[account.accountNumber]);

    return (
        <div>
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
            <h1 className="InValid">In Valid Input</h1>
        </div>
    )
}
const mapDispatchToProps =  dispatch => ({
    addAccountNumberValue: value =>{dispatch(addAccountNumberValue(value))},
    addPasswordValue: (value) => dispatch(addPasswordValue(value)),
    addAccountNumber: (value) =>dispatch(addAccountNumber(value)),
    addPassword: (value) => dispatch(addPassword(value)),
    clearValue:()=>dispatch(clearValue())
  });
  const mapStateToProps = (state) => ({
    atm:state.atm,
    account:state.account});
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginInput);