import {useContext } from "react";
import CalculatorContext  from '../store/Calculator-Context'


function useIsForEventKeyUp(bank){
    const {keyUp} =useContext(CalculatorContext);
    if (keyUp.key===bank.keyTrigger){
       
        return true;
    }
   return false;
}

export default useIsForEventKeyUp;