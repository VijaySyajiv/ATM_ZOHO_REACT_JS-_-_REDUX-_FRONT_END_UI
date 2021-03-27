import React from 'react'
import { connect } from "react-redux";

export const CheckBalance = ({customber}) => {
    
    return (
        <div>
        <h1>Balance<br/></h1>
        
       <button className="btn">{customber.accountBalance}</button>
        </div>
    )
}

const mapStateToProps = (state) => ({customber:state.customber.state});
export default connect(mapStateToProps)(CheckBalance);