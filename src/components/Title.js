import React from "react";
import './App.css'

function Title(props){
return(
    <div >
       <hr className="hr"/>
      <div className="title"> {props.title}</div> 
    </div>
)
}
export default Title;