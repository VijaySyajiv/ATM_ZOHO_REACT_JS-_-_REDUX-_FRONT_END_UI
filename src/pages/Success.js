import React, { useState } from 'react'
import { withRouter,useHistory } from 'react-router-dom';
export const Success = () => {
    let history=useHistory();
    React.useEffect(()=>{
        setTimeout(()=>{history.push('/Loginpage')},5000)

    },[])
    return (
        <div>
            <h1>Transaction Successfully Done</h1><br/><br/>
            <h1>Visit Again</h1>
            
        </div>
    )
}
export default Success