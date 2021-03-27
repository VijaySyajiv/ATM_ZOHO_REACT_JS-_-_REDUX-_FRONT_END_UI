import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './HomePage';
import MoneyLoader from './MoneyLoader';
import AccountDetails from './AccountDetails';
import AtmOperation from './AtmOperation';
import CheckBalance from './ATM Operation/CheckBalance';
import Loginpage from './ATM Operation/Loginpage';
import WithDraw from './ATM Operation/WithDraw';
import Loading from './Loading';
import Denomininations from './ATM Operation/Denomininations';
import Transfer from './ATM Operation/Transfer';
import MiniStatement from './ATM Operation/MiniStatement';
const RouterSetup=()=>{
      return (
          <>
          <Router>
              <Switch>
              <Route exact path='/'><Home/></Route>  
               <Route path='/MoneyLoader'><MoneyLoader/></Route>
               <Route path='/AccountDetails'><AccountDetails/></Route>
               <Route path='/AtmOperation'><AtmOperation/></Route>
               <Route path='/Loginpage'><Loginpage/></Route>
               <Route path='/CheckBalance'><CheckBalance/></Route>
               <Route path='/Loading'><Loading/></Route>
               <Route path='/WithDraw'><WithDraw/></Route>
               <Route path='/Denomininations'><Denomininations/></Route>
               <Route path='/Transfer'><Transfer/></Route>
               <Route path='/MiniStatement'><MiniStatement/></Route>      
              </Switch>
          </Router>
          </>
      )
  }
  export default RouterSetup;