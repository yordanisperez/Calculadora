import {useContext } from "react";
import CalculatorContext  from '../store/Calculator-Context'


function useIsForEventKeyDown(bank){
    const {keyDown} =useContext(CalculatorContext);
        if (keyDown.key===bank.keyTrigger){
           
            return true;
    
        }
    return false


}

export default useIsForEventKeyDown;