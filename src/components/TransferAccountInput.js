import React from 'react'
import { connect } from "react-redux";
import { withRouter,useHistory } from 'react-router-dom';
import {addAccountNumberValue,clearAccount,clearCustomber,addCustomer,clearValue,addPasswordValue,addAccountNumber,addPassword,addWithDrawAmount,addAtmAmountValue} from "../action/action";
import axios from 'axios';
import {compose} from "redux";

const TransferAccountInput = ({addAccountNumberValue,customber,clearAccount,clearValue,atm,account,addAccountNumber,clearCustomber,addWithDrawAmount,addAtmAmountValue,addPasswordValue,addPassword}) => {
  const [accountDetails,setAccountDetails]=React.useState(false);
  const [view,setView]=React.useState(false);
  const [inBalance,setInBalance]=React.useState(false);
  const [submit,setSubmit]=React.useState(false);
  const [amount,setAmount]=React.useState(false);
  const [accountverify,setAccountverify]=React.useState(false);
  const [sucessfull,setSucessfull]=React.useState(false);
  let history=useHistory();
  const sumbmitHandler= (e)=>{ 
      e.preventDefault();
     
      if(e.target.children[0].name=="account"){
           console.log("s")
            if(atm.accountNumberValue===""||atm.accountNumberValue==customber.accountNumber){      
            setView(true)
            clearValue();
            }
            else{
                addAccountNumber(atm.accountNumberValue)
                setAccountverify(true)
                clearValue();
            }
            setSubmit(true)
      } 
      else{
          
        if(atm.atmAmountValue>10000||atm.atmAmountValue<100||atm.atmAmountValue=="")
           { 
             setView(true)
             setInBalance(false)
            clearValue()
           }
        else if(customber.accountBalance<atm.atmAmountValue)
           {
            setInBalance(true)
            setView(false)
            clearValue()
           }
            
        else{
            
            addWithDrawAmount(atm.atmAmountValue)
            setAmount(true)
            setView(false)
            setInBalance(false)
              
            }
      }
    }
    
    const check=()=>{
      if(sucessfull){
        clearValue()
        clearCustomber()
        clearAccount()
        setSucessfull(false)
        history.push('/Success');

      }
       
      if(accountDetails===true && amount==false ){
          console.log(account.accountNumber)
           setView(false)
           setSubmit(false)
           setAmount(true)
        //    
      }
     
      else {
          if(account.accountNumber!=0&& accountDetails==false && submit==true)
        {
          setView(true)
          setSubmit(false)
        }
         }
      
    }
    check();
    
    React.useEffect(async ()=>{
        console.log(accountDetails+"-"+accountverify+"-"+amount)       
        if(accountDetails==false && accountverify==true){
          const response=await axios.post ('http://localhost:8080/AutomatedTellerMachine/transfer',account.accountNumber)
         .then(response=>{setAccountDetails(response.data)}).catch(err => {console.error(err)})
          setAccountverify(false)
        }  
        if(accountDetails==true && amount==true){
            const amount=atm.withDrawAmount
            const transferAccountNumber=account.accountNumber
            const json =JSON.stringify({transferAccountNumber,customber,amount})
            console.log(json)
            const response=await axios.post ('http://localhost:8080/AutomatedTellerMachine/onlineTransferAmount',json)
           .then(r=>{setSucessfull(r.data);}).catch(err => {console.error(err)})
          } 
        
    },[account.accountNumber,atm.withDrawAmount]);

    return (
        <div >
            <form onSubmit={sumbmitHandler}>
            {
            (account.accountNumber!==0&& accountDetails==false)?
            <input className="InputValue"
              type="number"
              name="account"
              value={atm.accountNumberValue}
              placeholder="Account Number"
              onChange={e =>{addAccountNumberValue(e.target.value);}}/>:
              <input className="InputValue"
              type="number"
              name="amount"
              value={atm.atmAmountValue}
              placeholder="Amount"
              onChange={e =>{addAtmAmountValue(e.target.value);}}
            />}<br/><br/>
            <button className="btn" type="submit" value="startUpOption">SUBMIT</button>
            </form>
           {view && <h1 className="InValid">InValid Input</h1> }
           {inBalance && <h1 className="InValid">Insufficient Balance</h1> }
        </div>
    )
}
const mapDispatchToProps =  dispatch => ({
    addAccountNumberValue: value =>{dispatch(addAccountNumberValue(value))},
    addAccountNumber: (value) =>dispatch(addAccountNumber(value)),
    clearValue:()=>dispatch(clearValue()),
    clearAccount:()=>dispatch(clearAccount()),
    clearCustomber:()=>dispatch(clearCustomber()),
    addWithDrawAmount: value =>{dispatch(addWithDrawAmount(value))},
    addAtmAmountValue: value =>{dispatch(addAtmAmountValue(value))}
  });
  const mapStateToProps = (state) => ({
    atm:state.atm,
    account:state.account,
    customber:state.customber.state});
    export default compose(
      withRouter,
      connect(mapStateToProps, mapDispatchToProps)
    )(TransferAccountInput);
