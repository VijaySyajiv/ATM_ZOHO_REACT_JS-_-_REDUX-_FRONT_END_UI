import React from 'react';
import { withRouter,useHistory } from 'react-router-dom';
const HomePage = () => {
    let history = useHistory();
    const [startUpOption, setStartUpOption] = React.useState({
        moneyLoader: false,
        accountDetails: false,
        atmOperation: false
      });
      const handleStartUpOption = (event) => {
        console.log(event.target.name)
        setStartUpOption({[event.target.value]: event.target.checked });
      };
const submitForm=(e)=>{
    
        e.preventDefault();
        console.log(startUpOption)
        if(startUpOption.accountDetails)
        history.push('/AccountDetails');
        else if(startUpOption.atmOperation)
        history.push('./Loginpage');
        else if(startUpOption.moneyLoader)
        history.push('/MoneyLoader');
        else
        alert("please chosse the option") ; 
    }
    return (
        <div className="box" value="startUpOption">
            
            <h1 >Choose The Option</h1>
	      <form onSubmit={submitForm}>
	           		
					<label htmlFor="MoneyLoader"><input type="radio" id="MoneyLoader" 
                       name="startUpOption" onChange={handleStartUpOption} 
                       value="moneyLoader"/>MoneyLoader</label><br/>
					                                       
					
					<label htmlFor="accountDetails"><input type="radio" id="accountDetails" 
                    name="startUpOption" onChange={handleStartUpOption}
                    value="accountDetails"/>Account Details</label><br/>
					
					
					<label htmlFor="atmOperation"><input type="radio" id="atmOperation"
                     name="startUpOption"  onChange={handleStartUpOption}
                     value="atmOperation"/>ATM Operation</label><br/>

                    <button className="btn" type="submit" value="startUpOption">submit</button>
            </form>
            
        </div>
    )
}
export default withRouter(HomePage); 