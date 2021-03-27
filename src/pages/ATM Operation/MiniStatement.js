import React from 'react'
import { connect } from "react-redux";
import {clearCustomber} from '../../action/action';
import {Link } from 'react-router-dom';
import {compose} from "redux";
import axios from 'axios';
import { withRouter,useHistory} from 'react-router-dom';
 const MiniStatement = ({clearCustomber,customber}) => {
    const [miniStatement,setMiniStatement]=React.useState([]);
    const [show,setShow]=React.useState(false);
   console.log(miniStatement)
    React.useEffect(()=>{
        if(show==false){
         const response=axios.post('http://localhost:8080/AutomatedTellerMachine/statement',customber.accountNumber)
        .then((response)=> axios.get ('http://localhost:8080/AutomatedTellerMachine/statement')
        .then(r=>{console.log(r.data);setMiniStatement(r.data)})).catch(err => {console.error(err)})
        setShow(true)
    }
    
    },[miniStatement])
const remarks=(to,from,type,amount)=>{
    if(to!=0){
     if(type=="Debit")
     return (<td>Fund Transfer to Acc {to}</td>)
     else
    return (<td>Fund Transfer From Acc {from}</td>)
    }
    else
     return  (<td>Debited {amount} From ATM</td>)
}
    
    return (
        <div>
            <h1>MiniStatement</h1>
            <h1>
            <div>ACCOUNT NUMBER  : {customber.accountNumber}</div> 
            <div>ACCOUNT NAME    : {customber.accountHolder}</div>
            <div>ACCOUNT BALANCE : {customber.accountBalance}</div>
            </h1>
            {
                        (show==true)?
                        
                            <table border ="1" width="500" align="center"> 
                            <thead >
                            <tr> 
                            <th><b>Transaction ID</b></th> 
                            <th><b>Transaction Remark</b></th> 
                            <th><b>Transaction Type</b></th>
                            <th><b>AMOUNT</b></th> 
                            </tr> 
                            </thead> 
                            <tbody>   
                                
                                {
                                    miniStatement.map((st, i) => (
                                        <tr key={i}> 
                                        <td>{i+1}</td>
                                        <td>{remarks(st.accountNumberTo,st.accountNumberFrom,st.transactionType,st.transactionAmount)}</td>
                                        <td>{st.transactionType}</td> 
                                        <td>{st.transactionAmount}</td>
                                        </tr>  ))
                                }
                            </tbody> 
                            </table>:<h1>NO RECORD FOUND</h1>
            }
                                
        
        <Link to='/Loginpage'>Back to home</Link>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearCustomber:()=>dispatch(clearCustomber())
  });
  const mapStateToProps = (state) => ({
    customber:state.customber.state
  });
  export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )(MiniStatement);