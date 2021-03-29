import React from 'react'
import { connect } from "react-redux";
import {addAtmAmountValue,addAtmAmount} from "../action/action";
import axios from 'axios';
const MoneyLoderInput = ({nextpage,addAtmAmountValue,addAtmAmount,atm}) => {
    const sumbmitHandler= async (e)=>{
        
        e.preventDefault()
        console.log(atm.atmAmountValue)
        if(atm.atmAmountValue%100000!==0||atm.atmAmountValue==""){
        alert("Please Money should be multiples of 1Lakh")
        }
        else{
          
            await addAtmAmount(atm.atmAmountValue)
            axios.post('http://localhost:8080/AutomatedTellerMachine/loader',atm.atmAmountValue)
            .then().catch(err => { console.error(err)})
            console.log(atm.atmAmount)
            nextpage();
          
        }
    }
    const handleChange = e =>{ addAtmAmountValue(e.target.value)};
    return (
        <div>
            <form onSubmit={sumbmitHandler}>
            <input
            className="InputValue"
              type="text"
              name="amount"
              value={atm.atmAmountValue}
              placeholder="Enter Amount..."
              onChange={handleChange}
            /><br/><br/>
             <button className="btn" type="submit" value="startUpOption">submit</button>
            </form><br/>
            
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
  addAtmAmountValue: value =>{dispatch(addAtmAmountValue(value))},
  addAtmAmount: value => dispatch(addAtmAmount(value))
  });
  const mapStateToProps = (state) => ({
    atm:state.atm});
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoneyLoderInput);
  
