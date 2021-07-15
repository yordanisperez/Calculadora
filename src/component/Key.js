import "./Key.css"
import {useState,useContext } from "react";
import useEventKeyboar from "./eventKeyboar";
import CalculatorContext from "../store/Calculator-Context";


const activeStyle = {
    backgroundColor: 'orange',
    color: 'black'
 
  };
  
  const inactiveStyle = {
 
  };

function Key(props) {
    const [padStyle,setPadStyle]=useState(inactiveStyle);
    useEventKeyboar(props.bank,setPadStyle);

    function onClickHandle(){
        props.onClickKeyEvent(props.bank);
        setPadStyle(inactiveStyle);
        
  
    }
    function onMouseDownHandle()
    {
        setPadStyle(activeStyle);   
    }

    return ( 
    <div     
        className={`key ${props.bank.type}`}
        id={props.bank.id}
        onClick={onClickHandle}
        onMouseDown={onMouseDownHandle}            
        style={padStyle}
        >
        {props.bank.keyTrigger}
    </div>
    )

}

export default Key;