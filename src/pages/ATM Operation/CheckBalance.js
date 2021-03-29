import React, { useState } from 'react'
import { connect } from "react-redux";
import axios from 'axios';
import { withRouter,useHistory } from 'react-router-dom';
import {compose} from 'redux'
export const CheckBalance = ({customber}) => {
  const [balance , setBalance]=React.useState();
  const [view , setView]=React.useState(false);    
  let history=useHistory();
    React.useEffect(async ()=>{
      if(view==false){
          const json =JSON.stringify({customber})
          const response=await axios.post ('http://localhost:8080/AutomatedTellerMachine/BalanceCheck',json)
         .then(response=>{setBalance(response.data)}).catch(err => {console.error(err)})    
         setView(true)
      }
      else{
        setTimeout(()=>{history.push('/Loginpage')},5000)
      }
        },[view]);

    return (
        <div>
        <h1>Balance<br/></h1>
        
       {view&&<button className="btn">{balance}</button>}
       <br/><br/>
      
        </div>
    )
}

const mapStateToProps = (state) => ({customber:state.customber.state});
export default  compose(
  withRouter,
  connect(mapStateToProps,null)
)(CheckBalance);