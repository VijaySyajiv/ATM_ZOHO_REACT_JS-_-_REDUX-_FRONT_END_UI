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
        <div>
            <h1>AtmOperation</h1>
            <h1 >Enter  The Option</h1>
	      <form onSubmit={submitForm}>
	           		<input type="radio" id="checkBalance" 
                       name="startUpOption" onChange={handleStartUpOption} 
                       value="checkBalance"/>
					<label htmlFor="checkBalance">CheckBalance</label>
					                                       
					<input type="radio" id="withDraw" 
                    name="withDraw" onChange={handleStartUpOption}
                    value="withDraw"/>
					<label htmlFor="withDraw">WithDraw</label><br/>
					
					<input type="radio" id="transfer"
                     name="startUpOption"  onChange={handleStartUpOption}
                     value="transfer"/>
					<label htmlFor="transfer">Online Transfer</label>

                    <input type="radio" id="miniStatement"
                     name="startUpOption"  onChange={handleStartUpOption}
                     value="miniStatement"/>
					<label htmlFor="miniStatement">MiniStatement</label>   

                    <button className="btn" type="submit" value="startUpOption"/>
            </form>
            <Link to='/'>Back to home</Link>
        </div>
    )
}
export default withRouter(AtmOperation);