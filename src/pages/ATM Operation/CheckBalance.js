import React from 'react'
import { connect } from "react-redux";
import {Link } from 'react-router-dom';
export const CheckBalance = ({customber}) => {
    
    return (
        <div>
        <h1>Balance<br/></h1>
        
       <button className="btn">{customber.accountBalance}</button>
       <br/><br/>
       <Link to='/Loginpage'>Back to home</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({customber:state.customber.state});
export default connect(mapStateToProps)(CheckBalance);