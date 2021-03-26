import React from 'react';
import {Link } from 'react-router-dom';
import MoneyLoderInput from '../components/MoneyLoderInput';
import { connect } from "react-redux";
import {compose} from "redux";
import { withRouter,useHistory} from 'react-router-dom';
import {addAtmAmount } from "../action/action";

const MoneyLoader = ({atmAmount}) => {
    let history = useHistory();
    const nextpage=()=>history.push('/')
    
    return (
        <div>
            <h1>MoneyLoader</h1>
            <MoneyLoderInput nextpage={nextpage} />
            <Link to='/'>Back to home</Link>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addAtmAmount: value => dispatch(addAtmAmount(value))
  });
  const mapStateToProps = ({ atmAmount }) => ({
    atmAmount
  });
  export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )(MoneyLoader);