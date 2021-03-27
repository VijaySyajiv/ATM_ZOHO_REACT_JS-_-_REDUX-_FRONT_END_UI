import React from 'react'
import { connect } from "react-redux";
import {removeNote} from '../../action/action'
import {Link } from 'react-router-dom';
 const Denomininations = ({removeNote,note}) => {
  
    
    return (
        <div>
            <div className="Denomininations">
               {(note.hundredRupees!=0)&&<h1>100* {note.hundredRupees}= {note.hundredRupees*100}</h1>}
               {(note.fiveHundredRupees!=0)&&<h1>500* {note.fiveHundredRupees}= {note.fiveHundredRupees*500}</h1>}
               {(note.thousandRupees!=0)&&<h1>1000* {note.thousandRupees}= {note.thousandRupees*1000}</h1>}
               <h1>TOTAL {(note.hundredRupees*100)+(note.fiveHundredRupees*500)+(note.thousandRupees*1000)}</h1>
            </div>
            <Link to='/Loginpage'>Back to home</Link>
        </div>
    )
}
const mapDispatchToProps =  dispatch => ({
    removeNote:(object)=>dispatch(removeNote(object))
  });
  const mapStateToProps = (state) => ({
    note:state.note.state});
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Denomininations);
