import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './HomePage'
import MoneyLoader from './MoneyLoader'
import AccountDetails from './AccountDetails'
import AtmOperation from './AtmOperation'
import CheckBalance from './ATM Operation/CheckBalance'
import Loginpage from './ATM Operation/Loginpage';
import Loading from './Loading';
const RouterSetup=()=>{
      return (
          <>
          <Router>
              <Switch>
              <Route exact path='/'><Home/></Route>  
               <Route path='/MoneyLoader'><MoneyLoader/></Route>
               <Route path='/AccountDetails'><AccountDetails/></Route>
               <Route path='/AtmOperation'><AtmOperation/></Route> 
               <Route path='/AtmOperation'><AtmOperation/></Route> 
               <Route path='/Loginpage'><Loginpage/></Route>
               <Route path='/CheckBalance'><CheckBalance/></Route>
               <Route path='/Loading'><Loading/></Route>  
              </Switch>
          </Router>
          </>
      )
  }
  export default RouterSetup;