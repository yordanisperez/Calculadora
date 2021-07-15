import {useEffect, useContext} from "react";
import isForEventKeyDown from "./isForEventKeyDown"
import isForEventKeyUp from "./isForEventKeyUp";
import CalculatorContext from "../store/Calculator-Context";

const activeStyle = {
    backgroundColor: 'orange',
    color: 'black'
 
  };
  
  const inactiveStyle = {
   
  };
function useEventKeyboar(bank,setPadStyle){
    const {setCurrentDataDisplay,keyDownHandle,keyDown}=useContext(CalculatorContext);
    const isEventKeyDownForMy=isForEventKeyDown(bank);
    const isEventKeyUpForMy=  isForEventKeyUp(bank)
    useEffect(()=>{  
            if (isEventKeyDownForMy){
                setPadStyle(activeStyle);
                setCurrentDataDisplay(bank);
              
            }else
            if (isEventKeyUpForMy)
                setPadStyle(inactiveStyle);

},[keyDown,isEventKeyDownForMy,isEventKeyUpForMy]);
  
}
export default useEventKeyboar;