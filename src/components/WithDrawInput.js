import React from 'react'
import { connect } from "react-redux";
import { withRouter,useHistory } from 'react-router-dom';
import {addAtmAmountValue,removeWithdrawAmount,addNote,addWithDrawAmount,clearValue} from "../action/action";
import axios from 'axios';
import {compose} from "redux";


const WithDrawInput = ({addWithDrawAmount,removeWithdrawAmount,clearValue,addNote,atm,customber,addAtmAmountValue}) => {
  const [accountDetails,setAccountDetails]=React.useState([]);
  const [view,setView]=React.useState(false);
  const [balance,setBalance]=React.useState(false);
  const [atmBalance,setAtmBalance]=React.useState(false);
  const [nextPage,setNextPage]=React.useState(false);
  let history=useHistory();
  const sumbmitHandler= (e)=>{ 
    e.preventDefault(); 
    if(atm.atmAmountValue==""||atm.atmAmountValue%100!=0||atm.atmAmountValue<100||atm.atmAmountValue>10000)      
    {
        setBalance(false)
        setAtmBalance(false)
        setView(true)
        clearValue()
    
    }
    else{
         var atmAmount=atm.atmAmount
        if((customber.accountBalance-100)<atm.atmAmountValue){   
           
        setView(false)
        setAtmBalance(false)
        setBalance(true)
        clearValue();
        return;
        }
       
        // else if(atmAmount<atm.atmAmountValue){ 
        //     console.log(atmAmount)
        //     console.log(atm.atmAmountValue)
           
        //     setBalance(false)
        //     setView(false)
        //     setAtmBalance(true)
        //     clearValue();
        //     return;
        // }
        else{
        addWithDrawAmount(atm.atmAmountValue)
        setBalance(false)
        setView(false)
        setAtmBalance(false)
        clearValue();
        }
        console.log(atm.atmAmountValue)
    }
    }
    
    const check=()=>{

      if(nextPage){
      addNote(accountDetails)
      setNextPage(false)
      setView(false)
      setAccountDetails([])
      history.push('/Denomininations');
      }
    }
  
    check();
    
    React.useEffect(async ()=>{ 
        if(atm.withDrawAmount!==""){
            let transferamount=atm.withDrawAmount
            const json =JSON.stringify({customber,transferamount})
          const response=await axios.post ('http://localhost:8080/AutomatedTellerMachine/WithDraw',json)
         .then(r=>{setAccountDetails(r.data);setNextPage(true)}).catch(err => {console.error(err)})
         removeWithdrawAmount()
        }  
    },[atm.withDrawAmount]);

    return (
        <div >
            <form onSubmit={sumbmitHandler}>
            <input
            className="InputValue"
              type="number"
              name="amount"
              value={atm.atmAmountValue}
              placeholder="Amount"
              onChange={e =>{addAtmAmountValue(e.target.value)}}
            /><br/><br/>
            <button className="btn" type="submit" value="startUpOption">SUBMIT</button>
            </form>
           {(atmBalance&&<h1 className="InValid">ATM BALANCE NILL..</h1>)||(view && <h1 className="InValid">InValid Input</h1> )|| (balance && <h1 className="InValid">INSUFFICIENT BALANCE</h1> )}
        </div>
    )
}
const mapDispatchToProps =  dispatch => ({
    addWithDrawAmount: value =>{dispatch(addWithDrawAmount(value))},
    addAtmAmountValue: value =>dispatch(addAtmAmountValue(value)),
    clearValue:()=>dispatch(clearValue()),
    addNote:(object)=>dispatch(addNote(object)),
    removeWithdrawAmount:()=>dispatch(removeWithdrawAmount())
  });
  const mapStateToProps = (state) => ({
    atm:state.atm,
    account:state.account,
    customber:state.customber.state});
    export default compose(
      withRouter,
      connect(mapStateToProps, mapDispatchToProps)
    )(WithDrawInput);
