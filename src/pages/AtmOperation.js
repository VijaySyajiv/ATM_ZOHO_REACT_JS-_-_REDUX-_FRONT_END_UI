import React from 'react';
import ReactDOM from 'react-dom'
import { withRouter,useHistory } from 'react-router-dom';
import {Link } from 'react-router-dom';


export const AtmOperation = () => {
    let history = useHistory();
    const [startUpOption, setStartUpOption] = React.useState();
      const handleStartUpOption = (event) => {
        setStartUpOption({[event.target.value]: event.target.checked });
      };
const submitForm=(e)=>{
    
        e.preventDefault();
        
        if(startUpOption.checkBalance)
        history.push('/CheckBalance');
        else if(startUpOption.withDraw)
        history.push('/WithDraw');
        else if(startUpOption.transfer)
        history.push('/Transfer');
        else if(startUpOption.miniStatement)
        history.push('/MiniStatement');
        else
        alert("please chosse the option") ; 
    }
    return (
        <div className="box">
            <h1>ATM OPERATION</h1>
	      <form onSubmit={submitForm}>
	           		
					<label htmlFor="checkBalance">
                    <input type="radio" id="checkBalance" 
                       name="startUpOption" onChange={handleStartUpOption} 
                       value="checkBalance"/>  CheckBalance</label><br/>
					                                       
					
					<label htmlFor="withDraw">
                    <input type="radio" id="withDraw" 
                      name="startUpOption" onChange={handleStartUpOption}
                      value="withDraw"/>  WithDraw</label><br/>
					
					
					<label htmlFor="transfer">
                    <input type="radio" id="transfer"
                     name="startUpOption"  onChange={handleStartUpOption}
                     value="transfer"/>  Online Transfer</label><br/>

                    
					<label htmlFor="miniStatement">
                    <input type="radio" id="miniStatement"
                     name="startUpOption"  onChange={handleStartUpOption}
                     value="miniStatement"/>  MiniStatement</label> 
                    <br/>  

                    <button className="btn" type="submit" value="startUpOption">SUBMIT</button>
            </form>
            <br/>
            <Link to='/'>Back to home</Link>
        </div>
    )
}
export default withRouter(AtmOperation);