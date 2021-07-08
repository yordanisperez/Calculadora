import {useContext } from "react";
import MachineContext  from '../store/Machine-Context'


function useIsForPadEvent(bank){
    const {keyDown,setDisplay} =useContext(MachineContext);
    if (keyDown.keyCode===bank.keyCode){
        setDisplay(bank.id)
        return true;
    }
   return false;
}

export default useIsForPadEvent;