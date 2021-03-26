import React from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
export const AccountDetails = () => {
   
    const [accountDetails,setAccountDetails]=React.useState([]);
    const getAccountDetails=()=>{
         axios.get('http://localhost:8080/AutomatedTellerMachine/AccountDisplay')
                .then(resp => {setAccountDetails(resp.data);})
                .catch(err => {console.error(err);}) 
    }
    React.useEffect(()=>getAccountDetails(),[])
    return (
        <div>
            
                            
                        {
                        (accountDetails.length!==0)?
                        
                            <table border ="1" width="500" align="center"> 
                            <thead >
                                <tr> 
                                <th><b>Account Number</b></th> 
                                <th><b>Account Holder Name</b></th> 
                                <th><b>Pin Number</b></th>
                                <th><b>Balance</b></th> 
                                </tr>
                            </thead> 
                            <tbody>   
                                {
                                    accountDetails.map((accounts, i) => (
                                    <tr key={i}> 
                                    <td>{accounts.accountNumber}</td> 
                                    <td>{accounts.accountHolder}</td>
                                    <td>{accounts.pinNumber}</td> 
                                    <td>{accounts.accountBalance}</td> 
                                    </tr>  ))
                                }
                            </tbody> 
                            </table>
                            
                            :<br/>
                        }
                        
                    
                    
                    
        
        <Link to='/'>Back to home</Link>
        </div>
    )
}
export default AccountDetails;